'use client'
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { plans } from '@/data/plans';
import { cn } from '@/lib/utils';

interface SubscriptionProps { 
  page?: string, 
}

const Subscriptions:React.FC<SubscriptionProps> = ({ page }) => {
  const [tab, setTab] = useState('monthly');
  const selectedPlans = tab === 'monthly' ? plans.monthly : plans.quarterly;

  return (
    <div className="space-y-4 mt-8 mb-4">
      <div className="flex flex-col">
        <h2 className={ page === "/" ? "text-h4-clamp text-slate-800 mb-2 font-semibold drop-shadow-xl" : "text-slate-900 font-bold text-h3-clamp"}>Subscription Plan</h2>
        {page === "/" &&  (
          <h4 className="text-h3-clamp text-slate-900 font-bold">
            Become a Premium member! 
          </h4>        
        )}
        <p className="text-h6-clamp font-medium text-slate-600">
          Choose between monthly and quarterly plans to suit your learning goals.
        </p>
      </div>
      <Tabs defaultValue='monthly'>
        <TabsList className='md:ml-[43%] rounded-full '>
          <TabsTrigger className='rounded-full' value="monthly" onClick={() => setTab('monthly')}>Monthly</TabsTrigger>
          <TabsTrigger className='rounded-full' value="quarterly" onClick={() => setTab('quarterly')}>Quarterly</TabsTrigger>
        </TabsList>

        <TabsContent value={tab}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {selectedPlans.map((plan) => (
              <Card key={plan.id} className="bg-white cursor-pointer border rounded-lg shadow-md relative hover:shadow-xl hover:bg-slate-50">
                <CardHeader>
                  <CardTitle className="text-h4-clamp my-2 font-semibold">
                    {plan.title}
                    {plan.popular && (
                      <span className="text-xs ml-2 font-medium text-[#365CCE] px-2 py-0.5 bg-slate-300 rounded-full">
                        Popular
                      </span>
                    )}
                  </CardTitle>
                  <CardDescription className="text-h6-clamp text-slate-600 mt-2">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-slate-800 mb-4">
                    <span className="font-bold text-h3-clamp leading-none">₹{plan.price}</span>
                    <span className="text-h6-clamp ml-2">{tab}</span>
                  </div>
                  <ul className="list-disc ml-1 space-y-1 mb-4">
                    {plan.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Check className={cn('w-5 h-5 mr-2 p-1 rounded-full text-white', page === "home" ? "bg-blue-900" : "bg-blue-700" )} />
                        <span className='text-h6-clamp'>
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button variant={page === "home" ? "default" : null} className={cn("w-full text-xs",
                    page !== "home" && "bg-blue-700 text-white hover:bg-blue-800"
                   )}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Subscriptions;
