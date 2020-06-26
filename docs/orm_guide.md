### ORM

install module

    npm install --save sequelize
    npm install --save-dev sequelize-cli

generate model, migrations will automatically created

    npx sequelize-cli model:generate --name User --attributes id:integer,username:string,email:string,password:string

generate migrations

    npx sequelize-cli db:migrate:undo:all
    npx sequelize-cli db:migrate

create seeds
    
    npx sequelize-cli seed:generate --name pizzas
    npx sequelize-cli db:seed:all


## References

- https://sequelize.org/master/manual/getting-started.html
- https://github.com/sequelize/cli
- https://sequelize.readthedocs.io/en/latest/docs/migrations/


