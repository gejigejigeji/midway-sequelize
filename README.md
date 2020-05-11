# Midway 脚手架

>一个最基础的脚手架，在官方框架的基础上引用了sequelize-typescript作为ORM，配置完数据库地址即可运行.

- [Midway官网教程](https://midwayjs.org/)
- [Egg.js官网教程](https://eggjs.org/zh-cn/)

### Sequelize设置

>必须修改 lib -> database -> sequelize.ts 配置文件，修改为自己的数据库信息后才可以运行

```
export const sequelize =  new Sequelize({
    database: 'test',
    dialect: 'mysql',
    username: 'root',
    password: '0',
    storage: ':memory:',
    define:config
});

```

## QuickStart

<!-- add docs here for user -->


### 如何运行

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### 快捷指令

```bash
$ npm start
$ npm stop
```

启动成功后会看到数据库生成了 post与user两张表，访问127.0.0.1:7001可以看到Welcome to midwayjs!

到此恭喜你，成功入坑；

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


