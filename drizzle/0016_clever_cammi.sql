CREATE TABLE `catch_configurations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`flockId` int NOT NULL,
	`targetDeliveredWeight` decimal(10,3) NOT NULL,
	`calculatedCatchingWeight` decimal(10,3) NOT NULL,
	`feedWithdrawalLossPercent` decimal(5,2) NOT NULL DEFAULT '4.00',
	`catchingLoadingLossPercent` decimal(5,2) NOT NULL DEFAULT '0.70',
	`transportLossPercentPerHour` decimal(5,2) NOT NULL DEFAULT '0.30',
	`lairageLossPercent` decimal(5,2) NOT NULL DEFAULT '0.20',
	`transportDurationHours` decimal(5,2) NOT NULL DEFAULT '2.00',
	`totalShrinkagePercent` decimal(5,2) NOT NULL,
	`plannedCatchDates` text,
	`notes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`createdBy` int,
	CONSTRAINT `catch_configurations_id` PRIMARY KEY(`id`),
	CONSTRAINT `catch_configurations_flockId_unique` UNIQUE(`flockId`)
);
--> statement-breakpoint
ALTER TABLE `catch_configurations` ADD CONSTRAINT `catch_configurations_flockId_flocks_id_fk` FOREIGN KEY (`flockId`) REFERENCES `flocks`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `catch_configurations` ADD CONSTRAINT `catch_configurations_createdBy_users_id_fk` FOREIGN KEY (`createdBy`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX `idx_catch_config_flock_id` ON `catch_configurations` (`flockId`);