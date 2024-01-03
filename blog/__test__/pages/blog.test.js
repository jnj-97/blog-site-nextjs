import {render,screen} from '@testing-library/react'
import BlogPage from '@/pages/blog/[id]'
jest.mock('next/router', () => ({
    useRouter: jest.fn(() => ({
      push: jest.fn(),
      prefetch: jest.fn(),
    })),
  }));
describe('Blog page',()=>{
    const comments=[
        {
          "postId": 1,
          "id": 1,
          "name": "id labore ex et quam laborum",
          "email": "Eliseo@gardner.biz",
          "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        },
        {
          "postId": 1,
          "id": 2,
          "name": "quo vero reiciendis velit similique earum",
          "email": "Jayne_Kuhic@sydney.com",
          "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
        },
        {
          "postId": 1,
          "id": 3,
          "name": "odio adipisci rerum aut animi",
          "email": "Nikita@garfield.biz",
          "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
        },
        {
          "postId": 1,
          "id": 4,
          "name": "alias odio sit",
          "email": "Lew@alysha.tv",
          "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
        },
        {
          "postId": 1,
          "id": 5,
          "name": "vero eaque aliquid doloribus et culpa",
          "email": "Hayden@althea.biz",
          "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
        }
      ]
      const blog={
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }
    it('Should render Heading with blog title',()=>{
        render(<BlogPage blog={{blog:blog}} comments={{comments:comments}}/>)
        const title=screen.getByTestId("title")
        expect(title).toHaveTextContent("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
    })
    it('Should render body of blog',()=>{
        render(<BlogPage blog={{blog:blog}} comments={{comments:comments}}/>)
        const body=screen.getByTestId("blog-body")
        expect(body).toHaveTextContent("quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto")
        
    })
    it('Should render author text',()=>{
        render(<BlogPage blog={{blog:blog}} comments={{comments:comments}}/>)
        const author=screen.getByTestId("author")
        expect(author).toHaveTextContent("Written by Nobin Johnson")
        
    })
    it('Should render Image',()=>{
        render(<BlogPage blog={{blog:blog}} comments={{comments:comments}}/>)
        const image=screen.getByTestId("image")
        expect(image).toBeInTheDocument()
    })
    it('Should render Comment Heading',()=>{
        render(<BlogPage blog={{blog:blog}} comments={{comments:comments}}/>)
        const comment=screen.getByTestId("comment")
        expect(comment).toHaveTextContent("Comment")
    })
    it('Should render Add Comment Heading',()=>{
        render(<BlogPage blog={{blog:blog}} comments={{comments:comments}}/>)
        const comment=screen.getByTestId("add-comment")
        expect(comment).toHaveTextContent("Add Comment")
    })
    it('Should render Title label in add comment section',()=>{
        render(<BlogPage blog={{blog:blog}} comments={{comments:comments}}/>)
        const comment=screen.getByTestId("comment-title")
        expect(comment).toHaveTextContent("Title")
    })
    it('Should render Comment Title input in add comment section',()=>{
        render(<BlogPage blog={{blog:blog}} comments={{comments:comments}}/>)
        const comment=screen.getByTestId("comment-title-input")
        expect(comment).toBeInTheDocument()
    })
    it('Should render the comment label in add comment section',()=>{
        render(<BlogPage blog={{blog:blog}} comments={{comments:comments}}/>)
        const comment=screen.getByTestId("comment-label")
        expect(comment).toHaveTextContent("Comment")
    })
    it('Should render comment input in add comment section',()=>{
        render(<BlogPage blog={{blog:blog}} comments={{comments:comments}}/>)
        const comment=screen.getByTestId("comment-input")
        expect(comment).toBeInTheDocument()
    })
    it('Should render the submit button in add comment section',()=>{
        render(<BlogPage blog={{blog:blog}} comments={{comments:comments}}/>)
        const comment=screen.getByTestId("submit")
        expect(comment).toHaveTextContent("Comment")
    })
    
})