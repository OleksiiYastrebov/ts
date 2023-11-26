interface IPost {
   userId: number;
   id: number;
   title: string;
   body: string;
}

async function renderPosts<T>(): Promise<T | undefined> {
   try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();

      const postContainer = document.createElement('div.post-container');
      for (const obj of data) {
         postContainer.innerHTML += `<div class="post"><h4>${obj.title}</h4><p>${obj.body}</p>`;
      }
      document.body.appendChild(postContainer);

      return data;
   } catch (err) {
      console.log(err);
   }
}

await renderPosts<IPost[]>();

export {}; // needed to show ts that file is using modules for top level await
