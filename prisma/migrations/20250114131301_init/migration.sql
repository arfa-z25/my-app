/*
  Warnings:

  - A unique constraint covering the columns `[phone_no]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `job_Title` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_no` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pic` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "job_Title" TEXT NOT NULL,
ADD COLUMN     "phone_no" TEXT NOT NULL,
ADD COLUMN     "pic" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Message" (
    "m_id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "Date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "employee_id" INTEGER NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("m_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_phone_no_key" ON "Employee"("phone_no");

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
