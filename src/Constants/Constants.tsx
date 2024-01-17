import { v4 as uuidv4 } from "uuid";
import { userAnalysisItem } from "../Types/Types";
export const SignIn = [
  {
    type: "email",
    placeholder: "Email",
  },
  {
    type: "password",
    placeholder: "Password",
  },
];
export const SignUp = [
  {
    type: "email",
    placeholder: "Email",
  },
  {
    type: "password",
    placeholder: "Password",
  }
];
export const AddListForm = [
  {
    type: "text",
    placeholder: "Movie Name",
  },
  {
    type: "url",
    placeholder: "Image URL",
  },
  {
    type: "text",
    placeholder: "Description",
  },
];
export const TypeCheck = {
  action: [
    {
      id: uuidv4(),
      name: "Action1",
      link: "https://images.unsplash.com/photo-1520371764250-8213f40bc3ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWN0aW9ufGVufDB8fDB8fHww",
      description: "This is a ver fantastic movie with action sequences",
    },
    {
      id: uuidv4(),
      name: "Action2",
      link: "https://images.unsplash.com/photo-1533105045747-b9d71a0955f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWN0aW9ufGVufDB8fDB8fHww",
      description: "This is a ver fantastic movie with action sequences",
    },
    {
      id: uuidv4(),
      name: "Action3",
      link: "https://images.unsplash.com/photo-1597019558926-3eef445fdf60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWN0aW9ufGVufDB8fDB8fHww",
      description: "This is a ver fantastic movie with action sequences",
    },
    {
      id: uuidv4(),
      name: "Action4",
      link: "https://images.unsplash.com/photo-1585951237313-1979e4df7385?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFjdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      description: "This is a ver fantastic movie with action sequences",
    },
    {
      id: uuidv4(),
      name: "Action4",
      link: "https://media.istockphoto.com/id/184929528/photo/going-through-a-tunnel-with-high-speed.webp?b=1&s=170667a&w=0&k=20&c=qDslhi7yvGvzsa01c6MXIi-0qf_C1wFUqkbZgJY0BGk=",
      description: "This is a ver fantastic movie with action sequences",
    },
  ],
  adventure: [
    {
      id: uuidv4(),
      name: "Adventure1",
      link: "https://images.unsplash.com/photo-1682685795463-0674c065f315?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8YWR2ZW50dXJlfGVufDB8fDB8fHww",
      description: "This is a ver fantastic movie with adventure sequences",
    },
    {
      id: uuidv4(),
      name: "Adventure2",
      link: "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWR2ZW50dXJlfGVufDB8fDB8fHww",
      description: "This is a ver fantastic movie with adventure sequences",
    },
  ],
  comedy: [
    {
      id: uuidv4(),
      name: "comedy1",
      link: "https://images.unsplash.com/photo-1543584756-8f40a802e14f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tZWR5fGVufDB8fDB8fHww",
      description: "This is a ver fantastic movie with comedy sequences",
    },
    {
      id: uuidv4(),
      name: "comedy2",
      link: "https://images.unsplash.com/photo-1571456331030-a1369bc759dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbWVkeXxlbnwwfHwwfHx8MA%3D%3D",
      description: "This is a ver fantastic movie with comedy sequences",
    },
    {
      id: uuidv4(),
      name: "comedy4",
      link: "https://images.unsplash.com/flagged/photo-1572609239482-d3a83f976aa0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbWVkeXxlbnwwfHwwfHx8MA%3D%3D",
      description: "This is a ver fantastic movie with comedy sequences",
    },
    {
      id: uuidv4(),
      name: "comedy5",
      link: "https://media.istockphoto.com/id/1347127829/photo/funny-playing-birman-cat-with-blue-eyes-on-blue-background.webp?b=1&s=170667a&w=0&k=20&c=36OXW-mnrIp-xDm2DhZXPxgQEeOkSLgcMMYB3INinrU=",
      description: "This is a ver fantastic movie with comedy sequences",
    },
    {
      id: uuidv4(),
      name: "comedy6",
      link: "https://media.istockphoto.com/id/1347127829/photo/funny-playing-birman-cat-with-blue-eyes-on-blue-background.webp?b=1&s=170667a&w=0&k=20&c=36OXW-mnrIp-xDm2DhZXPxgQEeOkSLgcMMYB3INinrU=",
      description: "This is a ver fantastic movie with comedy sequences",
    },
    {
      id: uuidv4(),
      name: "comedy7",
      link: "https://media.istockphoto.com/id/618949520/photo/happiest-dog-in-the-world.webp?b=1&s=170667a&w=0&k=20&c=wouTLjVZhT1AqAu0KZ7Zhs4hnjFglw2tEhN8e8XnGQ8=",
      description: "This is a ver fantastic movie with comedy sequences",
    },
    {
      id: uuidv4(),
      name: "comedy8",
      link: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tZWR5fGVufDB8fDB8fHww",
      description: "This is a ver fantastic movie with comedy sequences",
    },
    {
      id: uuidv4(),
      name: "comedy9",
      link: "https://images.unsplash.com/photo-1610308479130-5141d71ba6e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbWVkeXxlbnwwfHwwfHx8MA%3D%3D",
      description: "This is a ver fantastic movie with comedy sequences",
    },
    {
      id: uuidv4(),
      name: "comedy10",
      link: "https://plus.unsplash.com/premium_photo-1684718741067-c1940665e640?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbWVkeXxlbnwwfHwwfHx8MA%3D%3D",
      description: "This is a ver fantastic movie with comedy sequences",
    },
    {
      id: uuidv4(),
      name: "comedy11",
      link: "https://images.unsplash.com/photo-1529876754933-9ec125d43742?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbWVkeXxlbnwwfHwwfHx8MA%3D%3D",
      description: "This is a ver fantastic movie with comedy sequences",
    },
  ],
  drama: [
    {
      id: uuidv4(),
      name: "drama1",
      link: "https://plus.unsplash.com/premium_photo-1684831693040-375c9881e541?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHJhbWF8ZW58MHx8MHx8fDA%3D",
      description: "This is a ver fantastic movie with dramatic sequences",
    },
    {
      id: uuidv4(),
      name: "drama2",
      link: "https://images.unsplash.com/photo-1499720843949-d9e6f318dca0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJhbWF8ZW58MHx8MHx8fDA%3D",
      description: "This is a ver fantastic movie with dramatic sequences",
    },
    {
      id: uuidv4(),
      name: "drama3",
      link: "https://plus.unsplash.com/premium_photo-1684923604408-940b962a701a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZHJhbWF8ZW58MHx8MHx8fDA%3D",
      description: "This is a ver fantastic movie with dramatic sequences",
    },
    {
      id: uuidv4(),
      name: "drama4",
      link: "https://images.unsplash.com/photo-1550026593-cb89847b168d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHJhbWF8ZW58MHx8MHx8fDA%3D",
      description: "This is a ver fantastic movie with dramatic sequences",
    },
    {
      id: uuidv4(),
      name: "drama5",
      link: "https://images.unsplash.com/photo-1559781732-eed3e087c660?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRyYW1hfGVufDB8fDB8fHww",
      description: "This is a ver fantastic movie with dramatic sequences",
    },
    {
      id: uuidv4(),
      name: "drama6",
      link: "https://images.unsplash.com/photo-1611673982501-93cabee16c77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRyYW1hfGVufDB8fDB8fHww",
      description: "This is a ver fantastic movie with dramatic sequences",
    },
    {
      id: uuidv4(),
      name: "drama7",
      link: "https://images.unsplash.com/photo-1614248440900-a9a03427de03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRyYW1hfGVufDB8fDB8fHww",
      description: "This is a ver fantastic movie with dramatic sequences",
    },
    {
      id: uuidv4(),
      name: "drama8",
      link: "https://media.istockphoto.com/id/1180580913/photo/festive-theater-stage-for-christmas.webp?b=1&s=170667a&w=0&k=20&c=MYhoBLZfcybPYTnBi3rucNRdSu2dnzEcBIR6iMum1EE=",
      description: "This is a ver fantastic movie with dramatic sequences",
    },
  ],
  fantasy: [
    {
      id: uuidv4(),
      name: "fantasy1",
      link: "https://images.unsplash.com/photo-1523293836414-f04e712e1f3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFudGFzeXxlbnwwfHwwfHx8MA%3D%3D",
      description: "This is a ver fantastic movie with Fantasy sequences",
    },
    {
      id: uuidv4(),
      name: "fantasy2",
      link: "https://plus.unsplash.com/premium_photo-1682308191763-2813d4a2e746?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFudGFzeXxlbnwwfHwwfHx8MA%3D%3D",
      description: "This is a ver fantastic movie with Fantasy sequences",
    },
    {
      id: uuidv4(),
      name: "fantasy3",
      link: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFudGFzeXxlbnwwfHwwfHx8MA%3D%3D",
      description: "This is a ver fantastic movie with Fantasy sequences",
    },
    {
      id: uuidv4(),
      name: "fantasy4",
      link: "https://images.unsplash.com/photo-1560942485-b2a11cc13456?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFudGFzeXxlbnwwfHwwfHx8MA%3D%3D",
      description: "This is a ver fantastic movie with Fantasy sequences",
    },
    {
      id: uuidv4(),
      name: "fantasy5",
      link: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFudGFzeXxlbnwwfHwwfHx8MA%3D%3D",
      description: "This is a ver fantastic movie with Fantasy sequences",
    },
    {
      id: uuidv4(),
      name: "fantasy6",
      link: "https://images.unsplash.com/photo-1432958576632-8a39f6b97dc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhbnRhc3l8ZW58MHx8MHx8fDA%3D",
      description: "This is a ver fantastic movie with Fantasy sequences",
    },
    {
      id: uuidv4(),
      name: "fantasy7",
      link: "https://media.istockphoto.com/id/1070683626/photo/magical-old-book-with-sparkles.webp?b=1&s=170667a&w=0&k=20&c=k0CA_I75_Kq6UDR32iohqTjjiiOeJYUBdK_nM6Fw-Vc=",
      description: "This is a ver fantastic movie with Fantasy sequences",
    },
    {
      id: uuidv4(),
      name: "fantasy8",
      link: "https://images.unsplash.com/photo-1499343162160-cd1441923dd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhbnRhc3l8ZW58MHx8MHx8fDA%3D",
      description: "This is a ver fantastic movie with Fantasy sequences",
    },
    {
      id: uuidv4(),
      name: "fantasy9",
      link: "https://images.unsplash.com/photo-1490709501740-c7ac36b7d587?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZhbnRhc3l8ZW58MHx8MHx8fDA%3D",
      description: "This is a ver fantastic movie with Fantasy sequences",
    },
    {
      id: uuidv4(),
      name: "fantasy10",
      link: "https://plus.unsplash.com/premium_photo-1674593231084-d8b27596b134?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhbnRhc3l8ZW58MHx8MHx8fDA%3D",
      description: "This is a ver fantastic movie with Fantasy sequences",
    },
    {
      id: uuidv4(),
      name: "fantasy11",
      link: "https://images.unsplash.com/photo-1510218830377-2e994ea9087d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhbnRhc3l8ZW58MHx8MHx8fDA%3D",
      description: "This is a ver fantastic movie with Fantasy sequences",
    },
    {
      id: uuidv4(),
      name: "fantasy12",
      link: "https://images.unsplash.com/photo-1462759353907-b2ea5ebd72e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhbnRhc3l8ZW58MHx8MHx8fDA%3D",
      description: "This is a ver fantastic movie with Fantasy sequences",
    },
    {
      id: uuidv4(),
      name: "fantasy12",
      link: "https://plus.unsplash.com/premium_photo-1661874048310-23eb9c3b6693?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhbnRhc3l8ZW58MHx8MHx8fDA%3D",
      description: "This is a ver fantastic movie with Fantasy sequences",
    },
  ],
  horror: [
    {
      id: uuidv4(),
      name: "horro1",
      link: "https://images.unsplash.com/photo-1516410529446-2c777cb7366d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9ycm9yfGVufDB8fDB8fHww",
      description: "This is a ver fantastic movie with horror sequences",
    },
    {
      id: uuidv4(),
      name: "horro2",
      link: "https://images.unsplash.com/photo-1601513445506-2ab0d4fb4229?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9ycm9yfGVufDB8fDB8fHww",
      description: "This is a ver fantastic movie with horror sequences",
    },
    {
      id: uuidv4(),
      name: "horror3",
      link: "https://images.unsplash.com/photo-1509401238785-48c8e54d23f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvcnJvcnxlbnwwfHwwfHx8MA%3D%3D",
      description: "This is a ver fantastic movie with horror sequences",
    },
    {
      id: uuidv4(),
      name: "horror4",
      link: "https://images.unsplash.com/photo-1603516863860-7d5c93a83fe8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvcnJvcnxlbnwwfHwwfHx8MA%3D%3D",
      description: "This is a ver fantastic movie with horror sequences",
    },
    {
      id: uuidv4(),
      name: "horror5",
      link: "https://plus.unsplash.com/premium_photo-1687148812314-dfc1c3bf1294?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvcnJvcnxlbnwwfHwwfHx8MA%3D%3D",
      description: "This is a ver fantastic movie with horror sequences",
    },
  ],
  musicals: [
    {
      id: uuidv4(),
      name: "musical1",
      link: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWNhbHxlbnwwfHwwfHx8MA%3D%3D",
      description: "This is a ver fantastic movie with musical sequences",
    },
    {
      id: uuidv4(),
      name: "musical2",
      link: "https://images.unsplash.com/photo-1625801821669-d11f0ede90cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11c2ljYWx8ZW58MHx8MHx8fDA%3D",
      description: "This is a ver fantastic movie with musical sequences",
    },
    {
      id: uuidv4(),
      name: "musical3",
      link: "https://plus.unsplash.com/premium_photo-1664194584355-25196f114804?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWMlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
      description: "This is a ver fantastic movie with musical sequences",
    },
    {
      id: uuidv4(),
      name: "musical4",
      link: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWMlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
      description: "This is a ver fantastic movie with musical sequences",
    },
    {
      id: uuidv4(),
      name: "musical5",
      link: "https://images.unsplash.com/photo-1563089145-599997674d42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXVzaWMlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
      description: "This is a ver fantastic movie with musical sequences",
    },
    {
      id: uuidv4(),
      name: "musical6",
      link: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWMlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
      description: "This is a ver fantastic movie with musical sequences",
    },
  ],
  mystery: [
    {
      id: uuidv4(),
      name: "mystery1",
      link: "https://media.istockphoto.com/id/1308986719/photo/yellow-question-mark-on-a-background-of-black-signs-faq-concept.webp?b=1&s=170667a&w=0&k=20&c=nYJZc-GjMeQDjQU0sl8dvpxF0PBCVyht69Zi2RbLzyM=",
      description: "This is a ver fantastic movie with mystery sequences",
    },
    {
      id: uuidv4(),
      name: "mystery2",
      link: "https://images.unsplash.com/photo-1531312656382-3764c4c2a264?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXlzdGVyeXxlbnwwfHwwfHx8MA%3D%3D",
      description: "This is a ver fantastic movie with mystery sequences",
    },
    {
      id: uuidv4(),
      name: "mystery3",
      link: "https://images.unsplash.com/photo-1594531405613-de69af2ee1ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXlzdGVyeXxlbnwwfHwwfHx8MA%3D%3D",
      description: "This is a ver fantastic movie with mystery sequences",
    },
    {
      id: uuidv4(),
      name: "mystery4",
      link: "https://images.unsplash.com/photo-1587409982232-facf90ba2291?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG15c3Rlcnl8ZW58MHx8MHx8fDA%3D",
      description: "This is a ver fantastic movie with mystery sequences",
    },
    {
      id: uuidv4(),
      name: "mystery5",
      link: "https://images.unsplash.com/photo-1598615821969-e4b1c7fcf24d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG15c3Rlcnl8ZW58MHx8MHx8fDA%3D",
      description: "This is a ver fantastic movie with mystery sequences",
    },
  ],
  romance: [
    {
      id: uuidv4(),
      name: "mystery5",
      link: "https://images.unsplash.com/photo-1598615821969-e4b1c7fcf24d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG15c3Rlcnl8ZW58MHx8MHx8fDA%3D",
      description: "This is a ver fantastic movie with mystery sequences",
    },
  ],
  scienceFiction: [{}],
  sports: [{}],
  thriller: [{}],
};
export const userAnalysis = {
  actions: 2,
};
export const userAnalysis1:userAnalysisItem[] = [
  {
    id: 1,
    like: [{
      action: [0, 4],
      musicals: [2, 5, 3],
      romance: [0],
      mystery: [1, 2, 4],
    }],
  },
  {
    id: 2,
    like: [{
      action: [0, 1, 2, 4],
      musicals: [2, 1, 5, 6],
      romance: [0],
      mystery: [1, 3, 0, 4],
    }],
  },
];

