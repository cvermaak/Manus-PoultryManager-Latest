# Poultry Business Manager - Project TODO

## Module 1: Foundation & Core Infrastructure
- [x] Design and implement complete database schema for all modules
- [x] Set up user authentication with Manus OAuth
- [x] Implement role-based access control (Admin, Farm Manager, Accountant, Sales Staff, Production Worker)
- [x] Create base dashboard layout with sidebar navigation
- [x] Build user management interface
- [x] Set up project structure and configuration
- [x] Create initial database migration

## Module 2: Broiler Production Management
- [x] Create house configuration system with dimensions and specifications
- [x] Build flock creation and management interface
- [x] Implement daily data entry form (mortality, feed consumption, weight samples)
- [x] Create FCR calculation engine
- [x] Build flock list view with filtering and sorting
- [x] Create detailed flock view with tabs (Daily Records, Growth Performance, Health Records, Feed Consumption)
- [x] Implement vaccination schedule management
- [x] Create health record tracking system
- [x] Build growth performance charts and visualizations
- [x] Fix growth chart to skip days without weight measurements (convert 0 to null, use connectNulls)
- [x] Implement mortality tracking and analysis

## Module 3: Procurement Automation
- [ ] Create item template system with calculation formulas
- [ ] Build supplier management interface
- [ ] Implement smart quantity calculation engine (area-based, bird-count-based, worker-based)
- [ ] Create procurement scheduling system based on flock placement dates
- [ ] Build order generation interface with review and adjustment
- [ ] Implement email order notification system
- [ ] Implement WhatsApp order notification system
- [ ] Create order tracking and confirmation system
- [ ] Build house preparation checklist
- [ ] Create procurement dashboard with upcoming orders

## Module 4: Feed Manufacturing
- [ ] Create feed formulation management (9 formulations: Premium/Value/Econo × Starter/Grower/Finisher)
- [ ] Build batch production tracking interface
- [ ] Implement raw material inventory management
- [ ] Create quality control record system
- [ ] Build cost per batch calculation engine
- [ ] Create feed inventory status dashboard
- [ ] Implement batch traceability system
- [ ] Build production planning interface

## Module 5: Customer Management & Sales
- [ ] Create customer profile management
- [ ] Implement customer segmentation (wholesale/retail)
- [ ] Build credit limit and payment terms management
- [ ] Create sales order interface
- [ ] Build invoice generation system with VAT calculation
- [ ] Implement payment tracking and allocation
- [ ] Create customer statement generation
- [ ] Build credit/debit note management
- [ ] Implement automated payment reminders

## Module 6: Financial Accounting
- [ ] Create chart of accounts structure
- [ ] Implement general ledger with double-entry bookkeeping
- [ ] Build accounts receivable management
- [ ] Create accounts payable management
- [ ] Implement bank reconciliation
- [ ] Build expense categorization and tracking
- [ ] Create profit & loss statement report
- [ ] Build balance sheet report
- [ ] Create cash flow statement report
- [ ] Implement invoice matching for procurement
- [ ] Build payment automation workflow

## Module 7: Inventory Management & Analytics
- [ ] Create multi-location inventory tracking
- [ ] Implement stock movement recording
- [ ] Build inventory valuation system
- [ ] Create reorder point alerts
- [ ] Build executive dashboard with KPIs
- [ ] Create revenue trends visualization
- [ ] Build flock performance comparison charts
- [ ] Implement production metrics dashboard
- [ ] Create financial KPIs dashboard
- [ ] Build inventory turnover analytics

## Module 8: Document Storage & AI Features
- [ ] Implement S3-based document storage
- [ ] Create document categorization system
- [ ] Build document upload and management interface
- [ ] Implement document search and filtering
- [ ] Create AI-powered natural language query interface
- [ ] Build query interpretation and SQL generation
- [ ] Implement response formatting with visualizations
- [ ] Create conversation history for follow-up questions

## Module 9: Reporting System
- [ ] Create customizable report builder
- [ ] Implement production reports (flock performance, mortality analysis, FCR trends)
- [ ] Build financial reports (trial balance, aged receivables/payables)
- [ ] Create sales reports (by customer, by product, outstanding invoices)
- [ ] Implement inventory reports (stock on hand, valuation, movement)
- [ ] Build compliance reports (vaccination records, quality certificates)
- [ ] Create report scheduling and email delivery
- [ ] Implement export functionality (PDF, Excel, CSV)

## Module 10: Testing & Deployment
- [ ] Write comprehensive unit tests for all tRPC procedures
- [ ] Perform integration testing across all modules
- [ ] Conduct user acceptance testing
- [ ] Create user documentation and training materials
- [ ] Perform security audit and penetration testing
- [ ] Optimize database queries and indexes
- [ ] Create backup and disaster recovery procedures
- [ ] Deploy to production environment
- [ ] Create system monitoring and alerting
- [ ] Deliver final application with documentation


## Module 2: Detailed Implementation Tasks (In Progress)
- [ ] Build comprehensive flock detail page with tabbed interface
- [ ] Create daily data entry form with mortality, feed consumption, and weight samples
- [ ] Implement FCR calculation engine (Feed Conversion Ratio)
- [ ] Build growth performance chart showing weight progression over time
- [ ] Create mortality tracking with cumulative and daily views
- [ ] Implement vaccination schedule management with reminders
- [ ] Build health records system for tracking treatments and observations
- [ ] Add feed consumption tracking and analysis
- [ ] Create flock status update workflow (planned → active → completed)
- [ ] Implement data validation and error handling for daily entries
- [ ] Add filtering and sorting to flock list view
- [ ] Create unit tests for all new procedures


## Module 2 Enhancement: Target Performance Benchmarks
- [x] Add standard broiler growth curve data (target weight by age)
- [x] Display target weight line on growth performance chart
- [x] Calculate performance deviation (actual vs. target)
- [x] Add performance status indicator (on-track, ahead, behind)
- [x] Color-code performance metrics based on deviation from target
- [ ] Allow customization of target growth curve per flock or breed


## Module 2 Enhancement: Breed-Specific Benchmarks & Location Tracking
- [x] Research South African performance standards for Ross, Cobb, and Arbor Acres breeds
- [x] Add breed field to houses table (Ross 308, Cobb 500, Arbor Acres)
- [x] Add location fields to houses (farm name, physical address, GPS coordinates)
- [x] Create breed-specific growth curves based on official 2022 performance objectives
- [x] Implement breed-specific FCR targets
- [x] Update performance calculations to use breed-specific benchmarks
- [x] Add breed selector to house creation/edit forms
- [x] Add location fields to house creation/edit forms
- [x] Display breed and location information in house cards and detail views
- [x] Update flock detail page to show breed-specific target curves
- [x] Create unit tests for breed-specific performance calculations


## Module 2 Enhancement: Weight Units, Feed Planning & Consumption Metrics
- [x] Add weight unit selector (grams/kg) to flock creation and daily records
- [x] Store user's preferred weight unit in flock configuration
- [ ] Display weights in selected unit throughout the application
- [ ] Convert between units automatically for calculations
- [x] Add realistic weight expectation validation based on breed, age, and target weight
- [ ] Show expected weight range warnings when target is unrealistic
- [x] Add feed planning to flock creation (starter/grower/finisher periods)
- [x] Add feed type selection (Premium/Value/Econo) for each feed phase
- [x] Calculate and display feed phase date ranges automatically
- [x] Store feed plan with from/to dates for each phase
- [ ] Display active feed phase on flock detail page
- [ ] Add feed consumption tracking to daily records (already exists, enhance display)
- [ ] Add water consumption tracking to daily records (already exists, enhance display)
- [ ] Calculate and display feed consumption per bird per day
- [ ] Calculate and display water consumption per bird per day
- [ ] Add feed:water ratio metrics
- [ ] Create feed and water consumption trend charts
- [ ] Add alerts for abnormal consumption patterns


## Module 2 Enhancement: Reminder & Alerts System
- [x] Create reminders database table (id, flockId, houseId, reminderType, title, description, dueDate, priority, status, createdAt)
- [x] Add reminder generation logic for vaccination schedules
- [x] Add reminder generation for feed phase transitions
- [x] Add reminder generation for house preparation tasks
- [x] Add environmental monitoring reminders (temperature, humidity, CO2)
- [x] Add routine task reminders (weight sampling, water quality, litter management)
- [x] Add critical milestone reminders (placement, slaughter, deliveries)
- [x] Add biosecurity task reminders (footbath changes, sanitization)
- [x] Create reminder dashboard tile showing today/this week/next week
- [x] Implement reminder priority system (urgent/high/medium/low)
- [x] Add reminder status tracking (pending/completed/dismissed)
- [x] Create backend procedures for listing and managing reminders
- [x] Build reminder UI component with color-coded badges
- [x] Add quick action buttons to mark reminders as complete
- [x] Implement automatic reminder generation on flock creation
- [ ] Add manual reminder creation interface
- [ ] Create reminder notification system
- [x] Write unit tests for reminder generation logic


## Module 2 Enhancement: Comprehensive Health Management System
- [ ] Create vaccine database table (id, name, brand, manufacturer, diseaseType, applicationMethod, dosagePerBird, boosterInterval, instructions, withdrawalPeriod)
- [ ] Create stress pack database table (id, name, brand, dosageStrength, recommendedDuration, instructions, costPerKg)
- [ ] Create flock vaccination schedules table (id, flockId, vaccineId, scheduledDay, status, actualDate, notes)
- [ ] Create flock stress pack schedules table (id, flockId, stressPackId, startDay, endDay, dosageStrength, status, notes)
- [ ] Add destination fields to flocks table (destinationName, destinationAddress, destinationGpsLat, destinationGpsLng, collectionDate, travelDuration, feedWithdrawalTime)
- [ ] Build vaccine database with common broiler vaccines (ND, IB, Gumboro, Marek's, Coccidiosis, Fowl Pox)
- [ ] Add vaccine brands (Ceva, Zoetis, MSD, Bioproperties, Onderstepoort)
- [ ] Create vaccination protocol templates (Standard Broiler, Premium Protocol, Organic Protocol)
- [ ] Build stress pack database with common brands and dosage strengths
- [ ] Create stress pack protocol templates (Placement, Vaccination Support, Pre-Slaughter)
- [ ] Add Health Management navigation menu item
- [ ] Build Health Management page with vaccine library and protocol management
- [ ] Create vaccination schedule component for flock creation (template selection)
- [ ] Create stress pack schedule component for flock creation
- [ ] Add destination and collection planning section to flock creation
- [ ] Implement distance calculation using Maps API
- [ ] Build pre-departure preparation checklist generator
- [ ] Add vaccination schedule tab to flock detail page
- [ ] Add stress pack schedule tab to flock detail page
- [ ] Implement dosage calculation based on flock size
- [ ] Add vaccine instruction display with mixing ratios and application timing
- [ ] Create automatic reminder generation for vaccinations (3 days, 1 day, on day)
- [ ] Create automatic reminder generation for stress pack periods
- [ ] Create automatic reminder generation for feed withdrawal and pre-departure tasks
- [ ] Add vaccination status tracking (scheduled, completed, missed, rescheduled)
- [ ] Add stress pack status tracking (active, completed, cancelled)
- [ ] Build vaccine usage reporting (doses used, cost per flock)
- [ ] Build stress pack usage reporting (quantity used, cost per flock)
- [ ] Implement pre-transport protocol calculator (feed withdrawal timing based on collection time)
- [ ] Create automatic stress pack schedule generator for long-distance transport
- [ ] Add transport distance/duration-based protocol recommendations
- [ ] Build pre-transport checklist generator with scientific protocols
- [ ] Add expected vs actual weight loss tracking and reporting
- [ ] Write unit tests for health management procedures


## Module 2 Enhancement: Reminder Confirmation & Audit Trail
- [x] Add confirmation status to reminders (completed, dismissed statuses)
- [x] Add actionedBy field to track which user completed/dismissed the reminder (completedBy)
- [x] Add actionedAt timestamp for when action was taken (completedAt)
- [x] Add notes field for users to add comments when completing reminders (actionNotes)
- [x] Update RemindersWidget to show confirmation status with color coding
- [x] Add action history view showing who completed which reminders and when
- [x] Implement reminder completion form with notes and confirmation
- [ ] Create reminder audit log for compliance and accountability
- [ ] Add filter to view reminders by status and user
- [ ] Add notification to production manager when critical reminders are not confirmed
- [ ] Write unit tests for reminder confirmation tracking


## Module 2 Enhancement: Health Management Interface (Current Work)
- [x] Add vaccine and stress pack schema fields (vaccineType, storageTemperature, shelfLifeDays, activeIngredients)
- [x] Create health router with tRPC procedures (listVaccines, listStressPacks)
- [x] Seed database with 11 vaccines and 6 stress packs
- [x] Build Health Management page (/health) with vaccine and stress pack libraries
- [x] Add Health menu item to navigation sidebar
- [x] Add stress pack administration tab to FlockDetail page (parallel to Vaccinations tab)
- [ ] Create stress pack administration form to record when stress packs are given
- [x] Add vaccination scheduling section to flock creation form with protocol templates
- [x] Add stress pack scheduling section to flock creation form with manual day entry
- [ ] Implement pre-transport protocol calculator with Day -3 to Day 0 schedule
- [ ] Integrate health schedules with reminder system for automatic reminder generation
- [x] Test complete health management workflow end-to-end


## Module 2 Enhancement: Reminder Action History View
- [x] Add "Action History" tab to RemindersWidget to display completed/dismissed reminders
- [x] Show completion details: who completed, when, and action notes
- [x] Add filters: status (completed/dismissed/all), date range (7/30/90 days/all), priority (urgent/high/medium/low/all)
- [x] Display reminder type, priority, and completion status with color coding
- [x] Test reminder action history display


## Bug Fix: Action History Filter Issue
- [x] Fix priority filter being ignored when date range is set to 7/30/90 days
- [x] Test all filter combinations (status + priority + date range)
- [x] Verify filters work correctly in isolation and combination


## Module 2 Enhancement: Vaccine & Stress Pack CRUD + Reminder Templates
- [x] Add create/update/delete procedures for vaccines in health router
- [x] Add create/update/delete procedures for stress packs in health router
- [x] Add forms to Health Management page for adding/editing vaccines
- [x] Add forms to Health Management page for adding/editing stress packs
- [x] Add delete confirmation dialogs for vaccines and stress packs
- [x] Create reminder_templates database table
- [x] Create Reminder Templates page with CRUD interface
- [x] Add Reminder Templates menu item to navigation
- [x] Add template selection to flock creation form
- [x] Generate reminder instances from selected templates on flock creation
- [ ] Test complete workflow end-to-end (manual verification required)


## Module 2 Enhancement: Flock Edit and Copy
- [x] Add edit flock button to flock list
- [x] Create edit flock dialog with all settings editable
- [x] Update backend to support full flock editing
- [x] Add copy flock button to flock list
- [x] Create copy flock dialog pre-filled with original flock data
- [x] Generate new flock number automatically for copied flocks
- [ ] Test edit and copy workflows (manual verification required)


## Bug Fixes: Flock Management
- [x] Add delete flock button with confirmation dialog
- [x] Add backend delete procedure for flocks
- [x] Change dialog button text from "Create Flock" to "Update Flock" in edit mode


## Bug Fix: Cascade Deletion
- [x] Update deleteFlock to delete all related records (daily records, reminders, vaccination schedules, stress pack schedules) before deleting flock


## Bug Fix: Flock Update Health Data
- [x] Update flock edit mutation to include vaccination protocol and stress pack schedules
- [x] Load existing health schedules when editing a flock
- [x] Update backend to handle health schedule updates


## Bug Fix: Health Data Not Saving on Edit
- [x] Debug why vaccination protocol and stress pack schedules aren't being saved when editing flock
- [x] Fix health schedule generation on flock update
- [ ] Ensure health schedules display correctly in FlockDetail view (needs manual testing)


## Bug Fix: Selective Health Schedule Updates
- [x] Fix update logic to only delete/recreate the specific health schedules that were changed
- [x] Pre-populate edit form with existing vaccination protocol and stress pack schedules
- [ ] Load existing reminder template selections when editing flock (not implemented - templates are one-time generation)


## Feature: Reminders Tab in FlockDetail
- [x] Add Reminders tab to FlockDetail page showing all reminders for the flock
- [x] Display reminder type, due date, priority, status, and action buttons
- [ ] Add complete/dismiss functionality directly in the tab
- [x] Auto-update reminder due dates when placement date changes
- [x] Regenerate reminders when vaccination/stress pack schedules change (already implemented in update logic)


## Feature: Manage Reminder Templates for Existing Flocks
- [x] Add "Manage Templates" section in Reminders tab
- [x] Show checkboxes for all available templates with currently applied ones checked
- [x] Add backend procedure to add reminder template to existing flock
- [x] Add backend procedure to remove reminders generated from a specific template
- [x] Track which templates were used to generate which reminders


## Bug Fix: Reminder Filtering in FlockDetail
- [x] Fix reminders query to properly filter by flockId
- [x] Verify only reminders for the specific flock are displayed
- [x] Remove automatic reminder generation from flock creation (now uses templates only)
- [x] Test with flock that has no templates selected (should show no reminders)
- [x] Test with flock that has templates selected (should show only those reminders)


## Bug Fix: Reminder Template Generation Issue
- [x] Investigate why selecting single template generates multiple unrelated reminders (was old automatic generation)
- [x] Fix generateRemindersFromTemplates to save templateId field
- [x] Verify single template selection creates only that template's reminder (tested with Manus flock 2)

## Feature: Default Protocol Template with Copy & Customize
- [x] Extend reminder_templates schema to support template bundles (JSON field for sub-reminders)
- [x] Create seed script to generate "Default Broiler Protocol" template with all standard reminders
- [x] Add backend procedure to copy template and generate custom version
- [x] Add backend procedure to generate multiple reminders from bundle template
- [x] Create Copy & Customize dialog UI with checkbox interface
- [x] Implement reminder category checkboxes (house prep, feed, weight, biosecurity, environmental, milestones)
- [x] Add template name input for saving custom template
- [x] Wire up save functionality to create new template from selections
- [x] Test complete workflow: copy default → customize → save → apply to flock
- [x] Write and pass vitest tests for bundle template functionality (5/5 tests passing)


## Bug Fix: Template Checkbox Not Removing Reminders
- [x] Investigate why unchecking template in flock view doesn't remove reminders (old reminders had templateId: null)
- [x] Fix removeFromFlock procedure (works correctly for reminders with templateId)
- [x] Test checkbox toggle functionality (check/uncheck should add/remove reminders) - all tests passing

## Bug Fix: Custom Template Only Creating Single Reminder
- [x] Investigate why custom template with 3 reminders only creates 1 (addToFlock was using old single-reminder logic)
- [x] bundleConfig is being saved correctly during copy
- [x] Fix addToFlock procedure to use generateRemindersFromTemplates for bundle support
- [x] Test custom template generation with multiple reminder categories - all tests passing


## Cleanup: Delete Old Test Flocks
- [x] Identify all test flocks with orphaned reminders (templateId: null) - 33 flocks, 368 reminders
- [x] Delete test flocks and associated data (reminders, daily records, health records, vaccination schedules, etc.)
- [x] Verify cleanup was successful - all tables now empty

## Feature: Flock Archiving System (Future Enhancement)
- [ ] Add isArchived boolean field to flocks table
- [ ] Create archive/unarchive procedures
- [ ] Add "Archive" button to flock detail page
- [ ] Filter archived flocks from active flock list by default
- [ ] Add "View Archived Flocks" page for historical data access
- [ ] Preserve all data (reminders, records, health data) when archiving


## Bug Fix: Template Checkbox Creating Duplicate Reminders
- [x] Investigate why toggling template checkbox creates duplicates (UPDATE procedure was calling old generateFlockReminders)
- [x] Fix UPDATE procedure to use generateRemindersFromTemplates instead of generateFlockReminders
- [x] Write integration test to verify complete workflow
- [x] Test complete workflow: create flock with template → toggle checkbox → verify no duplicates (all tests passing)


## Bug Fix: Feed Transition Reminders Use Template Defaults Instead of Flock Feed Schedule
- [ ] Root cause: generateRemindersFromTemplates uses template's hardcoded dayOffset (10, 24) instead of flock's actual feed schedule
- [ ] Fix generateRemindersFromTemplates to read flock's starterToDay/growerToDay for feed_transition reminders
- [ ] Test with new flocks: verify reminders use flock's feed schedule, not template defaults
- [ ] Fix existing test flocks (Test, Test 2, Test 3) to use correct dates


## Bug Fix: Feed Transition Reminders Use Template Defaults Instead of Flock Feed Schedule
- [x] Root cause: generateRemindersFromTemplates uses template's hardcoded dayOffset (10, 24) instead of flock's actual feed schedule
- [x] Fix generateRemindersFromTemplates to read flock's starterToDay/growerToDay for feed_transition reminders
- [x] Add updateFeedTransitionReminderDates function to update reminder dates when feed schedule changes
- [x] Integrate feed schedule update logic into db.updateFlock function
- [x] Fix existing test flocks (Test, Test 2, Test 3) to use correct dates
- [x] Write comprehensive integration tests (2/2 tests passing)


## Feature: Automatic Flock Activation with Manual Override
- [x] Add status change audit fields to flocks table (statusChangedAt, statusChangedBy, statusChangeReason, isManualStatusChange)
- [x] Create background job/procedure to check and auto-activate flocks on placement date
- [x] Add manual activation/deactivation procedures with audit trail
- [x] Add "Change Status" button to flock detail page with reason dialog
- [x] Display activation status badge (Automatic/Manual) with timestamp in flock detail
- [x] Add status change history function (getFlockStatusHistory)
- [x] Write unit tests for automatic activation logic (4/4 tests passing)
- [x] Write unit tests for manual override functionality (4/4 tests passing)


## Feature: Status History View
- [x] Add Status History section to flock detail page showing all status changes
- [x] Display timestamp, user, status, reason, and automatic/manual indicator
- [x] Sort by most recent first
- [x] Add visual card-based layout for readability
- [x] Test with both manual and automatic status changes


## Enhancement: Improve Status Color Scheme
- [x] Update getStatusColor function to use more intuitive colors
- [x] Planned: outline (no color) - neutral, waiting to start
- [x] Active: amber/orange - in progress, requires attention
- [x] Completed: green - success, goal achieved
- [x] Cancelled: red - terminated
- [x] Add warning and success variants to Badge component
- [x] Test color scheme across flock list and detail pages


## Feature: Daily Records Entry Interface
- [x] Build complete Daily Records tab with data entry form
- [x] Add fields: date, day number, mortality count, feed consumed, water consumed, average weight, weight samples, temperature, humidity
- [x] Display records table with all daily entries sorted by date (newest first)
- [x] Auto-calculate day number from placement date
- [x] Show cumulative mortality and mortality rate in summary cards
- [x] Calculate and display FCR (Feed Conversion Ratio) in summary card
- [x] Auto-calculate average weight from comma-separated weight samples
- [x] Validate data entry (no negative values, min/max constraints)
- [x] Write unit tests for daily records (13 tests passing)
- [ ] Add edit and delete functionality for records (future enhancement)


## Feature: House Edit and Delete
- [x] Add updateHouse procedure in db.ts (already existed)
- [x] Add deleteHouse procedure in db.ts with safety check for active flocks
- [x] Add getHouseFlockCount helper function
- [x] Add tRPC procedures for house update, delete, and getFlockCount
- [x] Add Edit button and dialog to Houses page with form pre-population
- [x] Add Delete button with confirmation dialog
- [x] Prevent deletion of houses with active/planned flocks (throws error)
- [x] Soft delete houses with historical flocks (marks inactive)
- [x] Write unit tests for house CRUD operations (11 tests passing)


## Feature: Bundle Template Enhancement
- [x] Review existing bundle template schema and implementation
- [x] Add createBundle tRPC procedure to create bundles from selected templates
- [x] Add UI to create bundle templates by selecting multiple existing templates
- [x] Display bundle templates with visual indicator showing they contain multiple reminders
- [x] Separate bundle and single templates into distinct sections in UI
- [x] Write unit tests for bundle template creation (7 tests passing)
- [x] Test bundle template creation and application to flocks


## Feature: Standard Broiler Cycle Bundle Template
- [x] Create Standard Broiler Cycle bundle with 6 categories, 4 reminders each (24 total)
- [x] Categories: Vaccination, Feed Transition, Environmental Check, Biosecurity, Milestone, Performance Alert
- [x] Add Edit button for bundle templates with full edit dialog
- [x] Add updateBundle tRPC procedure and updateBundleTemplate db function
- [x] Ensure bundle copy functionality allows editing and deletion
- [x] Clean up test templates from database
- [x] Write unit tests for updateBundle (8 tests passing)


## Enhancement: Show Reminders in Bundle Categories
- [x] Add expandable section to bundle template cards showing reminders per category
- [x] Display reminder name, day offset, priority, and description
- [x] Update edit dialog to show reminder details within each category
- [x] Add collapsible/expandable UI for better readability
- [x] Add "View All Reminders" button with two-level expansion (bundle → category → reminders)


## Bug Fix: House Name Input Focus Issue
- [x] Fix input field losing focus after each keystroke when creating a house
- [x] Root cause: HouseForm component was defined inside the Houses component, causing re-creation on every render
- [x] Solution: Converted to renderFormContent function that returns JSX, wrapped in stable form elements


## Bug Fix: Vaccine and Stress-Pack Creation Failed to Fetch
- [ ] Investigate "failed to fetch" error when creating vaccines in Health Management
- [ ] Investigate "failed to fetch" error when creating stress-packs in Health Management
- [ ] Check tRPC procedures and database operations
- [ ] Test creation functionality after fix


## Feature: House Map View
- [x] Add Map View tab/toggle to Houses page
- [x] Display all houses as pins on Google Map using lat/lng coordinates
- [x] Click pin to zoom in and show house info popup (name, capacity, flock status)
- [x] Color-code pins by status (empty=green, active flock=amber, planned=blue)
- [x] Add color legend showing status meanings
- [x] Add satellite/terrain/roadmap view toggle buttons
- [x] Add location picker dialog when creating/editing house to set coordinates on map
- [x] Auto-fit map bounds when multiple houses displayed


## Bug Fix: GPS Coordinates Not Saving & DMS Format Support
- [x] Fix GPS coordinates not saving when editing a house (added fields to update procedure)
- [x] Add DMS to decimal coordinate converter (e.g., 26°11'39.9"S 28°36'02.9"E → -26.194417, 28.600806)
- [x] Add paste support for Google Maps DMS format with auto-conversion
- [x] Also supports decimal format pasting (e.g., "-26.194417, 28.600806")


## Bug Fix: Reminder Insertion Error
- [x] Fix reminder insertion using 'default' for required fields (title, reminderType)
- [x] Root cause: Bundle config uses 'name' field instead of 'title', and reminderType is at category level not reminder level
- [x] Fixed generateRemindersFromTemplates to use category.category for reminderType and reminderDef.name for title


## Restore: Bundle Template CRUD Functionality
- [x] Restore add/edit/remove category functionality in bundle edit dialog
- [x] Restore add/edit/remove reminder functionality within categories
- [x] Restore move category up/down buttons
- [x] Verify all bundle editing features work correctly
- [x] Add House Preparation category with pre-placement reminders (Day -7 to Day -1)


## Enhancement: House Preparation Protocol & Reminder Sorting
- [x] Update House Preparation reminders with user's actual protocol (Day -7 to Day 0)
- [x] Add reminder sorting functionality to bundle editor (sort by day offset)
- [x] Add move up/down buttons for individual reminders
- [x] Enhanced descriptions with industry best practices (Cobb, Aviagen standards)


## Enhancement: Vaccination Protocol Integration with Health Management
- [x] Remove hardcoded vaccination protocols from flock creation
- [x] Fetch available vaccines from Health Management database
- [x] Allow selection of individual vaccines with scheduled days
- [x] Apply Standard Protocol button for quick setup (auto-selects ND, IB, Gumboro vaccines)
- [x] Update flock creation form to use dynamic vaccine selection
- [x] Update stress-pack section to display actual product names from Health Management


## Feature: Health Protocol Templates
- [x] Create database schema for health_protocol_templates table
- [x] Add backend procedures for CRUD operations (create, list, get, update, delete)
- [x] Add "Save as Template" button in flock creation health section
- [x] Add template selection dropdown to quickly load saved protocols
- [x] Allow naming and describing templates
- [x] Test saving and loading health protocol templates


## Bug Fix: Vaccination Schedule Not Saving
- [x] Investigate vaccination schedule saving logic in flock creation
- [x] Fix backend to properly save vaccination schedules when creating a flock
- [x] Changed from vaccinationSchedules table to flockVaccinationSchedules table
- [x] Verify flock view vaccine tab displays saved vaccinations


## Bug Fix: Flock Age Calculation Off By One Day
- [x] Fix flock age calculation to treat placement day as Day 0 (not Day 1)
- [x] Placement on 04/12/2025 should show Day 13 on 17/12/2025, not Day 14
- [x] Use UTC dates to ensure consistent calculation regardless of server timezone
- [x] Verify age displays correctly in flock list and detail views


## Enhancement: Update Reminder Day References to Day 0 Convention
- [x] Analyze how reminder days are generated from bundle templates
- [x] Update bundle template reminder names to match dayOffset values
- [x] Update existing reminders in database to correct day numbers
- [x] Verify reminder titles show correct day numbers aligned with Day 0 convention
- [x] Fixed "Day 1 - Initial Brooding Temperature Check" → "Day 0" (dayOffset 0)
- [x] Fixed "Day 29 - Transition to Finisher Feed" → "Day 33" (actual day 33)


## Enhancement: Dashboard Reminders House Name & Flock Reminders Fix
- [x] Add house name to dashboard reminder display for easy identification
- [x] Updated getTodayReminders and getUpcomingReminders to join with houses table
- [x] Prepare structure for future farm name support (multi-farm operations)
- [x] Fix Complete/Dismiss buttons not working in flock view reminders tab
- [x] Added reminder action dialog with notes input for Complete/Dismiss actions


## Bug Fix: Reminder Timezone Issues
- [x] Fix getTodayReminders to use UTC date boundaries (Today tab showing tomorrow's reminders)
- [x] Fix getUpcomingReminders to use UTC date boundaries for consistent filtering
- [x] Update reminder display to show dates in user's local timezone without time (remove "at 02:00")
- [x] Ensure "Today" tab only shows reminders due on the current UTC date


## Feature: Sync Flock Reminders When Template Updated
- [x] Add "Sync" button to flock detail page to regenerate reminders from assigned templates
- [x] Preserve completed/dismissed reminder status when syncing (only add new, don't reset existing)
- [x] Added house_light_timing to reminderType enum in schema
- [x] Test adding new category (House Light Timing) to template and syncing to existing flock
- [ ] When template is updated, show option to sync all flocks using that template (future enhancement)


## Bug Fix: Sync Toggling Reminders On/Off
- [x] Fix sync function to be idempotent (safe to press multiple times)
- [x] Sync should only add NEW reminders, never remove existing ones
- [x] Fixed: sync now only filters based on completed/dismissed reminders, not pending ones
- [x] Test pressing sync multiple times without side effects - verified 3x clicks maintains all reminders


## Full Rebrand: AFGRO Poultry Manager with Agrarium Theme
- [x] Design and generate AFGRO company logo
- [x] Update CSS theme with Agrarium-inspired colors (green #7CB342, gold #D4A84B)
- [x] Add Google Fonts (Playfair Display for headings, Inter for body)
- [x] Update sidebar styling (dark green background)
- [x] Update application title to "AFGRO Poultry Manager"
- [x] Apply logo to application header
- [x] Update button and card styling
- [x] Test theme across all pages
- [x] Save checkpoint with new branding


## Branding Update: Full Name and Hero Banner
- [x] Generate hero banner image with modern chicken houses and "AFGRO Poultry Manager" text
- [x] Update sidebar to show full "AFGRO Poultry Manager" name
- [x] Add hero banner to dashboard page
- [x] Test and verify the changes
- [x] Save checkpoint with updated branding


## Fix: Hero Banner Text Visibility
- [x] Regenerate hero banner with clearly visible "AFGRO Poultry Manager" text
- [x] Ensure both AFGRO and Poultry Manager are readable
- [x] Test and verify the updated banner
- [x] Save checkpoint


## Edit Daily Records Feature
- [x] Add edit mutation to backend routers
- [x] Update frontend to support editing daily records
- [x] Write and run tests for edit functionality
- [x] Save checkpoint


## Fix: Daily Records Date Sorting
- [x] Sort daily records by date (most recent first)
- [x] Save checkpoint


## Delete Daily Records Feature
- [x] Add delete mutation to backend routers
- [x] Add delete button with confirmation dialog to frontend
- [x] Write and run tests
- [x] Save checkpoint


## Bug Fix: Performance Graph Not Showing Today's Data
- [ ] Investigate why Dec 18, 2025 data not showing on graph
- [ ] Check database records for correct dates
- [ ] Fix the issue
- [ ] Save checkpoint


## Bug Fix: Day Number Auto-Calculation Issue
- [ ] Investigate why day number calculated as 1 instead of 14 for Dec 18
- [ ] Fix the day number calculation logic
- [ ] Test and verify the fix
- [ ] Save checkpoint


## Fix: Growth Performance Chart Weight Line
- [ ] Review current chart implementation
- [ ] Update chart to only plot actual weight measurements (non-zero values)
- [ ] Skip days without weight data in the line chart
- [ ] Test with user's data
- [ ] Save checkpoint


## Bug Fixes
- [x] Fix hero banner image not displaying on published site (uploaded to CDN)
- [x] Fix daily record form to allow entering 0 or empty weight values for days without weighing
- [x] Fix current count calculation to show cumulative remaining birds (placement - total mortality to date)
- [x] Fix flock list page to also calculate current count dynamically from mortality records
- [x] Fix flock detail page (getFlockById) to calculate current count dynamically
- [x] Fix current count tile to refresh immediately after saving daily record (added getById invalidation)


## User Management UI Enhancement
- [ ] Update user schema with role enum (admin, farm_manager, accountant, sales_staff, production_worker)
- [ ] Create backend procedures for listing users and updating roles
- [ ] Build User Management admin page with user list and role assignment
- [ ] Implement role-based menu visibility in sidebar
- [ ] Add admin-only access protection for user management
- [ ] Write tests for user management functionality


## Email/Password Authentication System
- [ ] Add password hash field to users schema
- [ ] Add username field to users schema
- [ ] Create password hashing utility with bcrypt
- [ ] Create login procedure (email/username + password)
- [ ] Create user registration procedure (admin creates users)
- [ ] Create password change procedure
- [ ] Build email/password login page
- [ ] Update User Management page with user creation form
- [ ] Add password reset functionality
- [ ] Implement session management for email/password users


## Email/Password Authentication & User Management
- [x] Add username and passwordHash fields to user schema
- [x] Create password hashing utilities (bcrypt)
- [x] Create login backend procedure with email/username support
- [x] Create user registration procedure for admin to create users
- [x] Build login page with email/password form (alongside Manus OAuth)
- [x] Build User Management admin page with user creation, role assignment, password reset
- [x] Implement role-based menu visibility in sidebar (admin, farm_manager, accountant, sales_staff, production_worker)
- [x] Write tests for password utilities


## Email/Password Authentication Implementation
- [x] Add username and passwordHash fields to user schema
- [x] Create password hashing utilities with bcrypt
- [x] Create login/register backend procedures
- [x] Build login page with email/password form
- [x] Build User Management admin page with user creation
- [x] Implement role-based menu visibility in sidebar
- [x] Write tests for password utilities
- [x] Test and fix email/password login on dev server
- [x] Create ChangePassword page for first-time password setup
- [x] Integrate password change flow with login redirect


## Deployment to Railway
- [x] Review application structure and dependencies for production
- [x] Create Railway configuration files (Procfile, railway.json)
- [x] Set up environment variables for production
- [x] Create deployment documentation (DEPLOYMENT.md, RAILWAY_QUICK_START.md)
- [x] Test production build (2.6MB, all modules bundled successfully)
- [x] Verify all features work in production environment
- [ ] Fix email/password login error - user getting "You don't have permission to view this page" on dev server
- [x] Fix missing flock metrics after Railway migration - Updated to find latest non-zero weight
- [x] Fix metrics dropping to 0 after adding daily record on Railway - Updated frontend to use backend performanceMetrics and fixed backend to iterate forward through records


## Module 2 Enhancement: Slaughter Tracking System
- [x] Create slaughter_batches table for tracking slaughter groups
- [x] Create slaughter_catch_records table for daily catching operations
- [x] Create slaughterhouse_records table for slaughterhouse weight data
- [x] Implement shrinkage calculation engine (gut evacuation, catching, loading, transport)
- [x] Build slaughter management page with batch creation
- [x] Create catch record form with weight and feed removal hours
- [x] Implement slaughterhouse data import form
- [x] Build batch summary dashboard with totals and averages
- [x] Create variance analysis between estimated and actual weights
- [x] Add slaughter routes to navigation
- [x] Write comprehensive implementation documentation for GitHub
- [ ] Add slaughter tab to flock detail page
- [ ] Create slaughter reports and analytics
- [ ] Implement batch status workflow automation
- [ ] Add weight trend charts for slaughter batches

## Bugs to Fix
- [x] Fix automatic re-login after logout for email/password users - added /login route and updated logout to redirect to /login instead of OAuth URL

## User Management Enhancement
- [x] Add reactivate user backend procedure
- [x] Add delete user backend procedure (permanent removal)
- [x] Update User Management UI to show reactivate button for deactivated users
- [x] Add delete button with confirmation dialog
- [x] Show user status (active/inactive) in user list
- [x] Add reset password button with temporary password display


## User Management Enhancement: Create User Function
- [x] Add createUser database function to server/db.ts
- [x] Add createUser tRPC procedure to server/routers.ts
- [x] Add "Create New User" button to UserManagement page header
- [x] Build create user dialog with form fields (name, email, username, password, role)
- [x] Add form validation (email format, password strength, required fields)
- [x] Test user creation workflow end-to-end


## Bug Fixes - User Management Navigation & Email Verification
- [x] Fix DashboardLayout sidebar link from /users to /user-management
- [x] Disable email verification for username/password login (testing phase) - Already disabled by default
- [x] Test navigation works correctly
- [x] Test login without email verification


## OAuth Email Verification - Disable for Testing
- [ ] Research Manus OAuth email verification configuration
- [ ] Find where email verification is enforced in OAuth signup flow
- [ ] Disable email verification requirement for testing phase
- [ ] Test new user signup without email verification code


## Growth Performance Analytics - Flock Management
- [x] Advanced Growth Analytics Dashboard
  - [x] Daily Weight Gain (ADG) calculation and trend chart
  - [x] Uniformity Index from weight samples (coefficient of variation)
  - [x] Growth Rate Comparison (Ross 308, Cobb 500, Arbor Acres)
  - [x] Projected Final Weight forecast
  - [x] European Production Index (EPI) calculation
- [x] Feed Efficiency Analytics
  - [x] Daily Feed Intake per Bird tracking
  - [x] Feed Cost per kg Gain calculation (via FCR per phase)
  - [x] Feed Type Performance comparison (starter/grower/finisher)
  - [x] Water-to-Feed Ratio monitoring
- [x] Backend Implementation
  - [x] Add getAdvancedGrowthMetrics procedure
  - [x] Add getFeedEfficiencyMetrics procedure
  - [x] Add calculation helpers in db.ts
- [x] UI Implementation
  - [x] Add metrics cards to Growth Performance tab
  - [x] Add ADG trend chart
  - [x] Add Feed Efficiency chart
  - [x] Add performance indicators with color coding
- [x] Implementation complete - will display when flocks have daily records


## Phase 1: Essential Target Weight System
- [x] Add target weight fields to flocks table
  - [x] targetDeliveredWeight (what processor requires)
  - [x] targetCatchingWeight (auto-calculated with 5.5% shrinkage)
  - [x] Run SQL migration
  
- [x] Add target weight fields to flock creation/edit forms
  - [x] Add "Target Delivered Weight" input field
  - [x] Auto-calculate catching weight: delivered / 0.945
  - [x] Display both weights clearly
  - [x] Add helper text explaining shrinkage
  
- [x] Enhance Growth Performance chart
  - [x] Add "Target Catching Weight" reference line (green dashed)
  - [x] Add "Target Delivered Weight" reference line (orange dashed)
  - [x] Add legend explaining the lines
  - [x] Show weight gap (shrinkage buffer) explanation
  
- [x] Testing
  - [x] Test with new flock creation - Auto-calculation working (2.5kg → 2.646kg)
  - [x] Test with existing flock edit - Target weights added to FL-DF-2025-TRAIL
  - [x] Verify chart displays correctly - Reference lines implemented
  - [x] Verify calculations are accurate - 5.5% shrinkage formula correct


## Fix Target Weight Chart Display
- [x] Change target weight from flat horizontal lines to growth curves
- [x] Calculate daily target weight progression (0kg at day 0 → target catching weight at catch day)
- [x] Update chart data structure to include daily target weight points
- [x] Ensure target line grows proportionally with actual weight for easy comparison
- [x] Test with different target weights and growing periods - Chart verified working


## Growth Performance Chart Fix - Phase 2 (Actual Weight Line & Projected Catch Date)
- [x] Fix actual weight line to be solid green with correct values (not placed on benchmark line)
- [x] Remove separate "Target Catching Weight" line (redundant)
- [x] Remove separate "Target Delivered Weight" line (redundant)
- [x] Keep single "Farm Target Weight" line (orange dashed) = delivered weight × 1.055
- [x] Retain industry benchmark line (gray dotted) - Ross 308/Cobb 500
- [x] Add projected catch date indicator based on ADG trend (calculation complete)
- [x] Test chart with flock FL-DF-2025-TRAIL to verify all fixes - All working correctly

## Growth Performance Chart Fix - Phase 3 (Complete Data Display & Visual Indicator)
- [x] Investigate why actual weight line only shows 3 data points (days 0, 8, 14) instead of all recorded weights - Chart correctly shows only days with weight data
- [x] Fix chart data mapping to include ALL weight measurements from daily records table - Already working correctly, only 3 days have weights recorded
- [x] Add visible vertical line or marker on the chart showing projected catch date
- [x] Ensure projected catch date indicator is clearly visible with label
- [ ] Test with FL-DF-2025-TRAIL to verify all weight points appear and catch date indicator is visible
- [ ] Create test flock with realistic growth data to demonstrate projected catch date indicator

## Growth Performance Chart Fix - Final Implementation
- [x] Fix actual weight line to display all recorded measurements correctly
- [x] Retain industry benchmark line (gray dotted) for Ross 308/Cobb 500
- [x] Simplify to single Farm Target Weight line (orange dashed) including 5.5% shrinkage buffer
- [x] Remove redundant target weight lines
- [x] Add projected catch date calculation based on ADG
- [x] Implement text-based projected catch date indicator below chart (instead of vertical line due to Recharts technical limitations)
- [x] Create test flock FL-SLOW-GROWTH-TEST with realistic growth data
- [x] Test and verify all chart elements working correctly

## Form Cleanup: Remove Redundant Target Weight Field
- [x] Remove "Target Weight" field from flock creation form (redundant with Target Delivered Weight)
- [x] Remove "Target Weight" field from flock edit form
- [x] Keep only Target Weight Planning section with clear labels (Target Delivered Weight, Target Catching Weight)
- [x] Test flock creation to ensure form validation works correctly
- [x] Test flock editing to ensure existing flocks can be updated


## Harvest Management Feature - Phase 1 (Core Implementation)
- [x] Design database schema for harvest_records table
- [x] Add status field to flocks table (active, harvesting, completed)
- [x] Create migration for new tables/fields
- [x] Implement tRPC procedures: harvest.create, harvest.update, harvest.delete, harvest.list, harvest.getByFlock
- [x] Build Harvests page with list view showing all harvest records
- [x] Create harvest form with all core fields (date, times, counts, weights, crates, financial data)
- [x] Implement auto-calculations (withdrawal duration, travel duration, averages, shrinkage %)
- [x] Add multi-catch support (update flock current count on each harvest)
- [x] Add "Harvests" menu item to left navigation
- [x] Create "Harvest Records" tab in flock detail page
- [x] Add summary tiles in Harvest Records tab (Total Harvested, Remaining, Avg Weight, Shrinkage)
- [x] Update flock Overview tab to show remaining count after harvests (currentCount already reflects harvests)
- [ ] Implement "Ready for Harvest" indicator when birds reach target weight
- [ ] Add catch scheduling suggestion based on current weight vs target
- [ ] Test multi-catch workflow (partial depletion scenarios)
- [ ] Test flock status transitions (active → harvesting → completed)
- [ ] Write vitest tests for harvest procedures

## Harvest Management Feature - Phase 2 (Enhanced Analytics)
- [ ] Create Harvest Performance chart (delivered weight vs target across catches)
- [ ] Build shrinkage analysis dashboard
- [ ] Implement processor/destination master list management
- [ ] Add harvest history comparison across flocks
- [ ] Create harvest efficiency reports (duration, mortality rates)

## Harvest Management Feature - Phase 3 (Advanced Integration)
- [ ] Link harvests to Sales module for revenue tracking
- [ ] Implement predictive catch scheduling with market demand
- [ ] Add transport logistics optimization suggestions
- [ ] Create quality grading tracking system
- [ ] Build catch team performance tracking
