"use client";
import useUserStore from "@/app/store/authStore";
import { TestCard } from "@/components/main/test-card";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const BandTest = () => {

  const user = useUserStore((state) => state.user);
  const { toast } = useToast();
  const router = useRouter();

  const handleStartQuick = () => {
    if (!user?.username) {
      toast({
        title: "Please Login to Continue!",
        variant: "destructive",
      });
      return;
    }
    router.push(`/band-prediction/${user?.username}`);
  };

  const handleStartProper = () => {
    toast({
      title: "Proper Test will be available soon!",
      variant: "default",
    });
  };

  return (
    <div className="flex flex-col items-center text-gray-800">
      <main className="flex-grow flex flex-col md:flex-row mx-auto gap-8 py-6">
        <TestCard
          title="Quick Test"
          description="10 questions | Estimated Time: 5 minutes"
          details="The quick test includes a mix of grammar and reading questions to give you a fast estimate of your band score."
          rules={[
            "The test will be timed (5 minutes).",
            "You can only attempt this test once.",
            "Your score will be calculated based on correct answers.",
            "Ensure a quiet environment before starting the test.",
          ]}
          buttonText="Start Quick Test"
          onStart={handleStartQuick}
        />

        <TestCard
          title="Proper Test"
          description="Full Mock Test | Estimated Time: 2 hours"
          details="The proper test is a full-length mock test that mirrors the IELTS exam structure."
          rules={[
            "The test will be timed (2 hours).",
            "You can attempt this test multiple times.",
            "Your score will be calculated based on correct answers.",
            "Ensure a quiet environment before starting the test.",
          ]}
          buttonText="Start Proper Test"
          onStart={handleStartProper}
        />
      </main>
    </div>
  );
};

export default BandTest;
