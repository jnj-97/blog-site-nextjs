import {render,screen} from '@testing-library/react'
import Blog from '@/components/blog'

describe('Blog Component',()=>{
    it('Should render component with no text',()=>{
        render(<Blog/>)
        const container=screen.getByTestId("container")
        expect(container).toBeInTheDocument()
    })
    it('Should render the component with title as test',()=>{
        render(<Blog title="test"/>)
        const title=screen.getByTestId("title")
        expect(title).toHaveTextContent("test")
    })
    it('Should render the component with body as test',()=>{
        render(<Blog body="test"/>)
        const body=screen.getByTestId("body")
        expect(body).toHaveTextContent("test")
    })
    it('Should render the component with Read more link as Read more',()=>{
        render(<Blog/>)
        const link=screen.getByTestId("link")
        expect(link).toHaveTextContent("Read More")
        expect(link).toBeInTheDocument()
    })
})