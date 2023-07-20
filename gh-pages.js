import ghpages from 'gh-pages'

ghpages.publish(
    'dist', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/Marcel267/svelte-comment-section.git', // Update to point to your repository  
        user: {
            name: 'Marcel267', // update to use your name
            email: 'martinez.otano2000@web.de' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)