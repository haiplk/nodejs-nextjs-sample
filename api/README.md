## Prisma
1. Update schema at \prisma\schema.prisma

2. Run migration command
``` 
npx prisma migrate dev --name {migration_name}
```

3. Apply migration to db

```
npx prisma migrate deploy
```