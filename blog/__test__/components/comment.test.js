import {render,screen} from '@testing-library/react'
import Comment from '@/components/comment'

describe('Comment Component',()=>{
    it('Should render component with no text',()=>{
        render(<Comment/>)
        const container=screen.getByTestId("container")
        expect(container).toHaveClass("bg-slate-200")
    })
    it('Should render the component with email as test',()=>{
        render(<Comment email="test"/>)
        const email=screen.getByTestId("email")
        expect(email).toHaveTextContent("test")
    })
    it('Should render the component with id as test hours ago',()=>{
        render(<Comment id="test"/>)
        const id=screen.getByTestId("id")
        expect(id).toHaveTextContent("test hours ago")
    })
    it('Should render the component with name as test',()=>{
        render(<Comment name="test" />)
        const name=screen.getByTestId("name")
        expect(name).toHaveTextContent("test")
    })
    it('Should render the component with body as test',()=>{
        render(<Comment body="test" />)
        const body=screen.getByTestId("body")
        expect(body).toHaveTextContent("test")
    })
})