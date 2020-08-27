module.exports = head

const site = {
  title: 'l i n k s'
}

function head () {
    return `
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
      <title>${site.title}</title>
      <link rel="stylesheet" href="assets/tachyons.min.css"/>
      <link rel="stylesheet" href="assets/style.css"/>
    </head>
    `
}
