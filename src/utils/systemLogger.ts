import chalk from 'chalk';
import config from '../config/config';

async function requestLogger({ request, code, set, user }: any) {
  if (config.env === 'development') {
    let coloredMethod;
    switch (request.method) {
      case 'GET':
        coloredMethod = chalk.bgGreen(request.method);
        break;
      case 'DELETE':
        coloredMethod = chalk.bgRed(request.method);
        break;
      default:
        coloredMethod = chalk.bgYellow(request.method);
        break;
    }
    console.log('code', request);
    console.info(
      coloredMethod,
      chalk.yellow('--'),
      request.url.replace(`http://${config.server}:${config.port}`, ''),
      chalk.yellow('--'),
      code
        ? chalk.bgRedBright(code)
        : set.status === 200
          ? chalk.bgGreen(set.status)
          : set.status === 300
            ? chalk.bgYellowBright(chalk.black(set.status))
            : chalk.bgRedBright(chalk.black(set.status)),
      new Date(),
      user ?? 'Visitor'
    );
  }
}

function bootLogger({ hostname }: any) {
  const time = new Date().toLocaleTimeString();

  if (config.env === 'development') {
    console.log(
      `💻 ${time}: ${chalk.yellow(`${config.server.name} Dev Server`)} running on`,
      chalk.blueBright((hostname || 'local') + ':') + chalk.greenBright(config.port)
    );
  } else if (config.env === 'production') {
    console.log(
      `🖥️ ${time}: ${chalk.greenBright(`${config.server.name} Server`)} running.`,
      chalk.blueBright(hostname + ':') + chalk.greenBright(config.port || 3000)
    );
  }
}

const gracefulShutdown = async () => {
  console.log(chalk.yellowBright('shutting down gracefully (5 seconds) ....'));
  // disconnet DB and other services...
  setTimeout(() => {
    console.log('good bye');
    process.exit();
  }, 5000);
};

export { requestLogger, bootLogger, gracefulShutdown };
