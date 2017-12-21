console.log('hello from the browser JavaScript')

const submitProfileChanges = () => {
  const name = document.querySelector('#profileName').innerText
  const email = document.querySelector('#profileEmail').innerText
  fetch('', {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({name, email}),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(res => {
      if (name !== res.name && email !== res.email) {
        //show error
      } else {
        //show updated mmessage
      }
    })
}

const like = (e) => {
  if (!(document.querySelector('.likebutton').classList.contains('liked'))) {
    fetch(`${window.location.href}/like`, {
      method: 'POST',
      credentials: 'include',
    })
      .then(res => res.json())
      .then((res) => {
        const {liked} = res
        if (liked) {
          document.querySelector('.likebutton').classList.add('liked')
          document.querySelector('#likeCount').innerText = Number(document.querySelector('#likeCount').innerText) + 1
        }
      })
  }
}
