async function getData() {
    let videodiv = document.getElementById('feed');
    videodiv.innerHTML = null;

    // let search = document.getElementById('inputText').value;

    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=in&videoCategoryId=17&key=[user_key]&maxResults=12`)
    let data = await res.json();
    // console.log(data);
    // localStorage.setItem('searchresult', JSON.stringify(data))

    // let data = JSON.parse(localStorage.getItem('searchresult'))
    // console.log(data)

    let { items } = data;
    console.log(items);

    items.forEach(({ id }) => {
        console.log(id)
        let div = document.createElement('div');
        div.style.marginTop = '20px';
        div.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}" frameborder="0"></iframe>`;
        videodiv.append(div)
    });
}

getData()