/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Employee" ALTER COLUMN "pic" DROP NOT NULL;

-- DropTable
DROP TABLE "User";
