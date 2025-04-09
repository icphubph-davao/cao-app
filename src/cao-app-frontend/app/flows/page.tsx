"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <div className="flex flex-col gap-8 px-16 py-8">
      <div className="text-4xl font-normal">Process Flows</div>

      <Tabs defaultValue="city-accounts" className="">
        <TabsList className="space-x-4">
          <TabsTrigger value="city-accounts">City Accounts</TabsTrigger>
          <TabsTrigger value="barangay-accounts">Barangay Accounts</TabsTrigger>
        </TabsList>

        <TabsContent value="city-accounts">
          <div className="flex flex-col gap-4 py-4">
            <div className="flex flex-col gap-2">
              <div className="text-2xl font-normal">Certification of Financial Documents</div>
              <div className="text-lg">
                <div>1. Receive Payroll / Disbursement Voucher</div>
                <div>2. Evaluate Payroll / Disbursement Voucher</div>
                <div>3. Certify Payroll / Disbursement Voucher</div>
                <div>4. Release of Payroll / Disbursement Voucher</div>
              </div>
            </div>
            <Separator />
            <div className="flex flex-col gap-2">
              <div className="text-2xl font-normal">Preparation of Financial Statements</div>
              <div className="text-lg">
                <div>1. Receive and Check Daily Report transmitted by various offices</div>
                <div>2. Prepare Journal Entry Voucher for one transaction</div>
                <div>3. Verify and Approve Journal Entry Voucher for one transaction</div>
                <div>4. Reconcile records on allotments available for obligation at the end of each month</div>
                <div>5. Prepare and Generate Financial Statements and its supporting Schedules</div>
                <div>6. Review Financial Statements and its supporting Schedules</div>
                <div>7. Approve and Sign Financial Statements</div>
                <div>8. Submit and Post Signed Financial Statements</div>
                <div>9. Safekeeping and Retention of Transmittal Letter</div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="barangay-accounts">
        <div className="flex flex-col gap-4 py-4">
            <div className="flex flex-col gap-2">
              {/* <div className="text-2xl font-normal">Preparation of Financial Statements</div> */}
              <div className="text-lg">
                <div>1. Receive and Check for completeness of monthly reports</div>
                <div>2. Prepare Journal Entry Voucher per Monthly Report</div>
                <div>3. Verify and Approve Journal Entry Voucher</div>
                <div>4. Check Balances of Subsidiary Ledgers and Accounts to its normal balance</div>
                <div>5. Prepare Financial Statements with Schedules</div>
                <div>6. Review and Sign Financial Statements per Barangay</div>
                <div>7. Submit Approved and Signed Financial Statement</div>
                <div>8. Safekeeping and Retention of Received Transmittal Letter</div>
              </div>
            </div>
          </div>
        </TabsContent>

      </Tabs>
    </div>
  );
}
