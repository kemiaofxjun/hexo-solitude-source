hexo.on('ready', () => {
    const { version } = require('../../package.json')
    const logo = `
       ####    #####  #######  #####    ####   #####    ####   #     #
      #    #  #          #     #    #  #    #  #    #  #    #   #   #
      ######   ####      #     #####   ######  #####   ######     #
      #    #       #     #     #  #    #    #  #    #  #    #     #
      #    #  #####      #     #    #  #    #  #####   #    #     #
    `.replace(/#/g, '●')
    const message = `
  \x1b[38;5;45m=====================[ Hexo Theme - AstraBay ]=====================\x1b[0m
  \x1b[38;5;45m${logo}\x1b[0m
                         \x1b[38;5;45m version: ${version}\x1b[0m
  \x1b[38;5;45m===================================================================\x1b[0m
         \x1b[38;5;45mGitHub: https://github.com/Stars-harbor/astrabay\x1b[0m
  `
    hexo.log.info(message)
})
