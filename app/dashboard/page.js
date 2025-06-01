import Main from "@/components/Main"
import Dashboard from "@/components/Dashboard"
import Login from "@/components/Login"

export const metadata = {
  title: "Moodl | Dashboard",
};

export default function DashboardPage(){

    const isAuthenticated = true

    // Set initial children as a login page
    let children = (
        <Login />
    )

    // If authenticated, load user's dashboard page
    if (isAuthenticated){
        children = (
            <Dashboard />
        )
    }

    return (
        <Main>
            {children}
        </Main>
    )
}