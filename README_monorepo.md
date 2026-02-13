## 初始化workspace

```bash
# 创建pnpm-workspace.yaml
touch pnpm-workspace.yaml
# 在pnpm-workspace.yaml中添加以下内容
packages:
  - 'packages/*'
```

## 执行工程级命令

```bash
pnpm --workspace-root [...]
# 或
pnpm -w [...]
```
