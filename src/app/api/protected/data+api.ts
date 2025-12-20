import { withAuth } from "@/src/utils/middleware";

// Example protected data
const mockData = {
  secretMessage: "This is protected data!",
  timestamp: new Date().toISOString(),
};

export const GET = withAuth(async (req, user) => {

    // Can use authenticated user info in response or do other things
    
    return Response.json({
    data: mockData,
    user: {
        name: user.name,
        email: user.email,
    },
    });
});