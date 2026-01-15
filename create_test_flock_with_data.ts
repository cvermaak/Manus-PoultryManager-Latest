import { db } from './server/db';
import { flocks, flockDailyRecords } from './drizzle/schema';

async function createTestFlock() {
  // Create flock with placement date 25 days ago
  const placementDate = new Date();
  placementDate.setDate(placementDate.getDate() - 25);
  
  const [newFlock] = await db.insert(flocks).values({
    flockNumber: 'FL-CHART-TEST-2026',
    houseId: 1, // AFGRO-DF-H10
    placementDate: placementDate,
    initialCount: 20000,
    currentCount: 19500,
    targetSlaughterWeight: '1.70',
    weightUnit: 'kg',
    growingPeriod: 42,
    targetDeliveredWeight: '2.500',
    targetCatchingWeight: '2.646', // 2.500 * 1.055
    status: 'active',
  });
  
  const flockId = newFlock.insertId;
  console.log('Created flock with ID:', flockId);
  
  // Industry benchmark weights (Ross 308) - kg
  const benchmarkWeights = [
    0.042, // Day 0
    0.065, 0.095, 0.135, 0.185, 0.245, // Days 1-5
    0.315, 0.395, 0.485, 0.585, 0.695, // Days 6-10
    0.815, 0.945, 1.085, 1.235, 1.395, // Days 11-15
    1.565, 1.745, 1.935, 2.135, 2.345, // Days 16-20
    2.565, 2.795, 3.035, 3.285, 3.545  // Days 21-25
  ];
  
  // Create daily records with realistic growth (slightly below benchmark)
  const dailyData = [];
  let cumulativeMortality = 0;
  let cumulativeFeed = 0;
  
  for (let day = 0; day <= 25; day++) {
    const recordDate = new Date(placementDate);
    recordDate.setDate(recordDate.getDate() + day);
    
    // Weight: 95% of benchmark (realistic for good performance)
    const weight = benchmarkWeights[day] * 0.95;
    
    // Mortality: realistic pattern (higher early, stabilizes)
    let mortality = 0;
    if (day === 0) mortality = 0;
    else if (day <= 5) mortality = Math.floor(Math.random() * 40) + 30; // 30-70
    else if (day <= 10) mortality = Math.floor(Math.random() * 15) + 10; // 10-25
    else mortality = Math.floor(Math.random() * 8) + 5; // 5-13
    
    cumulativeMortality += mortality;
    
    // Feed: based on age and bird count
    const currentBirdCount = 20000 - cumulativeMortality;
    let feedPerBird = 0;
    if (day === 0) feedPerBird = 0;
    else if (day <= 7) feedPerBird = 0.015 + (day * 0.005); // 15-50g
    else if (day <= 14) feedPerBird = 0.050 + ((day - 7) * 0.010); // 50-120g
    else feedPerBird = 0.120 + ((day - 14) * 0.008); // 120-208g
    
    const totalFeed = (currentBirdCount * feedPerBird) / 1000; // Convert to kg
    cumulativeFeed += totalFeed;
    
    dailyData.push({
      flockId: Number(flockId),
      date: recordDate,
      dayNumber: day,
      mortality: mortality,
      cumulativeMortality: cumulativeMortality,
      feedConsumed: totalFeed.toFixed(1),
      feedType: day <= 10 ? 'starter' : (day <= 24 ? 'grower' : 'finisher'),
      averageWeight: weight.toFixed(3),
      temperature: day <= 7 ? 32 - day : 25,
    });
  }
  
  // Insert all daily records
  await db.insert(flockDailyRecords).values(dailyData);
  
  console.log(`Created ${dailyData.length} daily records with realistic growth data`);
  console.log(`Final weight: ${dailyData[25].averageWeight} kg at day 25`);
  console.log(`Total mortality: ${cumulativeMortality} birds (${(cumulativeMortality/20000*100).toFixed(2)}%)`);
  console.log(`Total feed: ${cumulativeFeed.toFixed(1)} kg`);
  
  process.exit(0);
}

createTestFlock().catch(console.error);
