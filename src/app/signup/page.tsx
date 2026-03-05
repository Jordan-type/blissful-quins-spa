import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignupPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="max-w-lg mx-auto">
          <h1 className="h1 text-primary text-center">Create your account</h1>
          <p className="p-muted text-center mt-2">Join Blissful Quins Spa for updates and easy booking.</p>

          <Card className="mt-8 rounded-2xl bg-secondary p-6">
            <div className="grid gap-4">
              <Input className="rounded-2xl" placeholder="Full Name" />
              <Input className="rounded-2xl" placeholder="Email" />
              <Input className="rounded-2xl" placeholder="Password" type="password" />
              <Button className="rounded-full w-full">Sign Up</Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}