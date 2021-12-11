var a = 100
var b = 100
var condition = a == b
console.log(condition)


for (let i = 10; i < 13; i++) {
    console.log(i);
}

let classA = ['Adam', 'Chan', 'Jojo']
for (test in classA) {
    console.log(classA[test]);
}

const posts = [
    {
        image: 'https://xx.img.com/a.png',
        description: 'A photo',
        date: '2022/10/11',
        comments: ['haha', 'good', 'nice']
    },
    {
        image: 'https://xx.img.com/a.png',
        description: 'A photo',
        date: '2022/10/11',
        comments: ['haha', 'good', 'nice']
    }
]
for (let i = 0; i < classA.length; i++) {
    if (i === 1) {
        posts[i].date = "2022/12/7"
        let post = posts[i]
        console.log(posts[i].date)
        console.log(post);
    }
}
