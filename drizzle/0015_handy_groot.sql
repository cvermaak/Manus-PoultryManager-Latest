ALTER TABLE `slaughter_catch_records` DROP FOREIGN KEY `slaughter_catch_records_batchId_slaughter_batches_id_fk`;
--> statement-breakpoint
ALTER TABLE `slaughterhouse_records` DROP FOREIGN KEY `slaughterhouse_records_catchRecordId_slaughter_catch_records_id_fk`;
--> statement-breakpoint
DROP INDEX `idx_slaughter_batches_flock_id` ON `slaughter_batches`;--> statement-breakpoint
DROP INDEX `idx_slaughter_batches_status` ON `slaughter_batches`;--> statement-breakpoint
DROP INDEX `idx_slaughter_batches_start_date` ON `slaughter_batches`;--> statement-breakpoint
DROP INDEX `idx_slaughter_catch_records_batch_id` ON `slaughter_catch_records`;--> statement-breakpoint
DROP INDEX `idx_slaughter_catch_records_catch_date` ON `slaughter_catch_records`;--> statement-breakpoint
DROP INDEX `idx_slaughterhouse_records_catch_record_id` ON `slaughterhouse_records`;--> statement-breakpoint
DROP INDEX `idx_slaughterhouse_records_received_date` ON `slaughterhouse_records`;--> statement-breakpoint
ALTER TABLE `slaughter_catch_records` ADD CONSTRAINT `slaughter_catch_records_batchId_slaughter_batches_id_fk` FOREIGN KEY (`batchId`) REFERENCES `slaughter_batches`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `slaughterhouse_records` ADD CONSTRAINT `slaughterhouse_records_catchRecordId_slaughter_catch_records_id_fk` FOREIGN KEY (`catchRecordId`) REFERENCES `slaughter_catch_records`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX `idx_sb_flock_id` ON `slaughter_batches` (`flockId`);--> statement-breakpoint
CREATE INDEX `idx_sb_status` ON `slaughter_batches` (`status`);--> statement-breakpoint
CREATE INDEX `idx_sb_start_date` ON `slaughter_batches` (`startDate`);--> statement-breakpoint
CREATE INDEX `idx_scr_batch_id` ON `slaughter_catch_records` (`batchId`);--> statement-breakpoint
CREATE INDEX `idx_scr_catch_date` ON `slaughter_catch_records` (`catchDate`);--> statement-breakpoint
CREATE INDEX `idx_shr_catch_id` ON `slaughterhouse_records` (`catchRecordId`);--> statement-breakpoint
CREATE INDEX `idx_shr_received_date` ON `slaughterhouse_records` (`receivedDate`);