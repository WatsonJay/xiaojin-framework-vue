# xiaojin开发平台前端框架

xiaojin-framework-vue采用vue3、vite、pnpm、Turborepo构建的Monorepo项目。

## 项目结构

```
├── apps/          # 应用程序目录
├── packages/      # 共享包目录
|-- utils/         # 公共工具类
├── package.json   # 工作空间配置
└── turbo.json     # Turborepo配置
```

## 开始使用

### 依赖版本
 - 本地环境安装 Node.js 、npm 、pnpm
 - Node.js 版本建议v20.15.0，要求Node 20+ 版本以上

### 安装依赖

```bash
pnpm install
```

### 开发命令

- `pnpm dev` - 启动所有应用的开发环境
- `pnpm build` - 构建所有应用和包
- `pnpm lint` - 运行所有项目的代码检查
- `pnpm clean` - 清理所有构建输出和缓存

## 添加新的应用或包

### 添加新应用

在 `apps` 目录下创建新的应用：

```bash
cd apps
pnpm create next-app my-app  # 示例：创建Next.js应用
```

### 添加新包

在 `packages` 目录下创建新的共享包：

```bash
cd packages
pnpm init
```

## 使用工作空间

- 在工作空间中安装依赖：`pnpm add <package> -w`
- 在特定项目中安装依赖：`pnpm add <package> --filter <project-name>`
