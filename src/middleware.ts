import { withAuth } from "next-auth/middleware"

export default withAuth(
    function middleware() { }, {
    callbacks: {
        authorized: ({ token }) => {
            if (
                token === null
            ) {
                return false
            }
            return true
        }
    }
}
)

export const config = {
    matcher: '/admin/:path*',
}