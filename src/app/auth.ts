import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [

    GitHub({
      profile(profile) {
        console.log("GitHub Profile:", profile);
    
        // Default role is "GitHub User"
        let userRole = "GitHub User";
    
        // Assign "admin" role if the email matches
        if (profile?.email === "shobhanrahman21@gmail.com") {
          userRole = "admin";
        }
    
        // Return profile data with added role
        return {
          ...profile,
          role: userRole,
        };
      },

      // GitHub_ID=f
      // GitHub_Secret=
   clientID: process.env.GitHub_ID,
   clientSecret: process.env.GitHub_Secret




    }),


    // This is for google user....

    Google({
      profile(profile) {
        console.log("Google Profile:", profile);
    
        // Declare and initialize userRole
        let userRole = "Google User";
    
      
    
        // Return profile data with added role
        return {
          ...profile,
          id: profile.sub,  // Assuming profile.sub contains a unique identifier for the user
          role: userRole,   // Adding the userRole to the returned profile
        };
        
      },

      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_Secret

    }),
    

    

    
  ],
})