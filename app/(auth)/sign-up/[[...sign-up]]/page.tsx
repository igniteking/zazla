import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function singup() {
  return (
    <div className="flex justify-center p-5">
      <SignUp
        appearance={{
          baseTheme: dark,
        }}
        forceRedirectUrl="/dashboard"
      />
    </div>
  );
}
