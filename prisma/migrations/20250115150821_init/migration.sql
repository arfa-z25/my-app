-- CreateTable
CREATE TABLE "Off" (
    "leave_id" SERIAL NOT NULL,
    "leave_type" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "reason" TEXT,
    "employee_id" INTEGER NOT NULL,
    "status" TEXT,

    CONSTRAINT "Off_pkey" PRIMARY KEY ("leave_id")
);

-- AddForeignKey
ALTER TABLE "Off" ADD CONSTRAINT "Off_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
