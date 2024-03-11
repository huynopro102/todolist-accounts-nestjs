/*
  Warnings:

  - Added the required column `createAt` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Made the column `fullname` on table `account` required. This step will fail if there are existing NULL values in that column.
  - Made the column `avatar` on table `account` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `account` ADD COLUMN `createAt` DATETIME(3) NOT NULL,
    ADD COLUMN `updateAt` DATETIME(3) NOT NULL,
    MODIFY `fullname` VARCHAR(191) NOT NULL,
    MODIFY `avatar` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `status` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `sale_price` DOUBLE NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `categoryId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RedefineIndex
CREATE UNIQUE INDEX `Account_email_key` ON `Account`(`email`);
DROP INDEX `account_email_key` ON `account`;

-- RedefineIndex
CREATE UNIQUE INDEX `Account_username_key` ON `Account`(`username`);
DROP INDEX `account_username_key` ON `account`;
