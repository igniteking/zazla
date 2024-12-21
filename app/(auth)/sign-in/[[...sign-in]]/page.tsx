import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function singin() {
  return (
    <div className="flex justify-center p-5">
      <SignIn
        appearance={{
          baseTheme: dark,
        }}
      />
    </div>
  );
}
