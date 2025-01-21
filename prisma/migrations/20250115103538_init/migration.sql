/*
  Warnings:

  - Added the required column `leave_type` to the `Leave` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Leave" ADD COLUMN     "leave_type" TEXT NOT NULL;
