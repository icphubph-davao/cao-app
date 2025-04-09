"use client";

// import Image from "next/image";
// import organizational_chart from "../../public/organizational-chart.jpg";
// import functional_chart from "../../public/functional-chart.jpg";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Page() {
  return (
    <div className="flex flex-col gap-8 px-16 py-8">
      <div className="text-4xl font-normal">Charts</div>

      <Tabs defaultValue="organizational" className="">
        <TabsList className="space-x-4">
          <TabsTrigger value="organizational">Organizational Chart</TabsTrigger>
          <TabsTrigger value="functional">Functional Chart</TabsTrigger>
        </TabsList>

        <TabsContent value="organizational">
          <div className="py-4">
            {/* <Image src={organizational_chart} alt="" /> */}
            <img src="./organizational-chart.jpg" alt="" />
          </div>
        </TabsContent>

        <TabsContent value="functional">
          <div className="py-4">
            {/* <Image src={functional_chart} alt="" /> */}
            <img src="./functional-chart.jpg" alt="" />
          </div>
        </TabsContent>

      </Tabs>
    </div>
  );
}
