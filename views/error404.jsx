// step 1
// const React = require('react')
// const Def = require('./default')
// ------------------------------------------------

// step 2
// const React = require('react')
// const Def = require('./default')

// function error404 () {}

// module.exports = error404
// --------------------------------------------

// step 3

const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <img src="\images\kiwi.jpg" alt="kiwi"/>
              <div>
                Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
              </div>
          </main>
      </Def>
    )
  }

module.exports = error404
