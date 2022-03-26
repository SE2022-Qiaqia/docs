# 软件计划文档

## 系统概述

本系统是一个前后端分离的Web应用程序，前端主要使用`Vue`开发，后端主要使用`SpringBoot`开发，并提供了`docker-compose`一键部署的支持，详见：[SE2022-Qiaqia/docker](https://github.com/SE2022-Qiaqia/docker)。

## 软件开发模型

| 软件生命周期 | 是否首先定义好所有的需求 | 是否有多个开发周期 | 是否有中间软件 |
| ------------ | ------------------------ | ------------------ | -------------- |
| **敏捷开发** | :heavy_check_mark:       | :heavy_check_mark: | :x:            |

## 项目估算

### 模块划分及规模估算

| 模块名称      | 模块规模                                                   |
| ------------- | ---------------------------------------------------------- |
| 用户模块      | 易，主要限于用户数据表，主要操作为登录、修改信息等。       |
| 认证/授权模块 | 难，涉及到多个表，需要针对操作进行划分。                   |
| 选课撤课模块  | 中，涉及到用户表和选课表等，需考察时间段等。               |
| 课程查询模块  | 难，涉及到各种表：学期、教师、学院等，需要复杂的条件查询。 |

### 进度估计

| 阶段与任务内容        | 开始日期   | 结束日期   | 状态               |
| --------------------- | ---------- | ---------- | ------------------ |
| Stage1                |            |            |                    |
| 项目选题、人员分工    | 2022-03-14 | 2022-03-19 | :heavy_check_mark: |
| 需求确定              | 2022-03-20 | 2022-03-27 | :running:          |
| Stage2                |            |            |                    |
| 界面设计              | 2022-03-28 | 2022-04-15 | :running:          |
| 数据库设计            | 2022-03-28 | 2022-04-05 | :running:          |
| 后端API设计           | 2022-04-07 | 2022-04-15 | :pencil:           |
| 文档撰写              | 2022-03-28 | 2022-04-15 | :running:          |
| Stage3                |            |            |                    |
| 后端API实现、单元测试 | 2022-04-16 | 2022-05-16 | :pencil:           |
| 前端API对接           | 2022-04-16 | 2022-05-16 | :pencil:           |
| 用户测试、跟进        | 2022-04-16 | 2022-05-16 | :pencil:           |
| Stage4                |            |            |                    |
| 最终测试              | 2022-05-17 | 2022-06-01 | :pencil:           |
| 完善系统              | 2022-05-17 | 2022-06-01 | :pencil:           |
| 文档完善              | 2022-05-17 | 2022-06-01 | :pencil:           |

> 参考图例：
> 
> | :pencil:  | :running: | :heavy_check_mark: |
> | ------ | --------- | ------------------ |
> | 计划中 | 进行中    | 已完成             |


:::warning
每个阶段都包括了文档跟进。
:::


### 工作量估算

| 阶段       | 阶段工作量估计占总工作量百分比 | 工作量(人×天) |
| ---------- | ------------------------------ | ------------- |
| 软件计划   | 2.5%                           | 10.5          |
| 需求调研   | 2.5%                           | 10.5          |
| 需求分析   | 5%                             | 21            |
| 需求设计   | 5%                             | 21            |
| 详细设计   | 5%                             | 21            |
| 编码       | 40%                            | 168           |
| 测试       | 30%                            | 126           |
| 部署及验收 | 10%                            | 42            |
| **合计**   | **100%**                       | **420**       |

### 成本估算

TODO：成本估算

## 人力资源安排

参见[项目人员分工](../team.md#人员分工)

## 开发环境

- 操作系统：Windows 10
- IDE&Editor：[VS Code](https://code.visualstudio.com/), [IntelliJ IDEA](https://www.jetbrains.com/idea/)
- JDK：JDK11

## 测试环境

- 操作系统：Windows 10
- 数据库：PostgreSQL
- JDK：11

## 风险评估和控制

TODO：风险评估和控制

## 测试计划

TODO：测试计划

## 评审计划

TODO：评审计划


## 质量保证计划

TODO：质量保障计划