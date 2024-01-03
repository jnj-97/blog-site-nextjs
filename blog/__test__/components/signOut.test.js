import {render,screen} from '@testing-library/react'
import Signout from '@/components/signOut'
jest.mock('next/router');
describe('signOut Component',()=>{
    it('Should render Welcome text',()=>{
        render(<Signout/>)
        const Welcome=screen.getByTestId("Welcome")
        expect(Welcome).toBeInTheDocument()
    })
    it('Should render the sign out button with text Sign Out',()=>{
        render(<Signout/>)
        const button=screen.getByTestId("sign out")
        expect(button).toHaveTextContent("Sign Out")
    })
})