import type { Topic } from '../../types';

export const topic25: Topic = {
  id: '25-matplotlib',
  title: 'NumPy Matplotlib',
  order: 25,
  category: 'advanced',
  description: '学习 NumPy 与 Matplotlib 结合进行数据可视化。',
  content: {
    explanation: `<p>NumPy 通常与 Matplotlib 一起使用进行数据可视化：</p>
<ul>
<li><strong>plot</strong> - 绘制折线图</li>
<li><strong>scatter</strong> - 绘制散点图</li>
<li><strong>bar</strong> - 绘制柱状图</li>
<li><strong>hist</strong> - 绘制直方图</li>
<li><strong>imshow</strong> - 显示图像/热力图</li>
</ul>
<p>注意：在浏览器环境中，matplotlib 的显示功能有限，这里主要展示数据准备。</p>`,
    keyPoints: [
      'NumPy 提供数据，Matplotlib 负责可视化',
      '可以绘制各种统计图表',
      '支持自定义样式和格式',
      '是 Python 数据可视化的标准组合'
    ]
  },
  examples: [
    {
      id: 'plt-1',
      title: '准备绘图数据',
      description: '使用 NumPy 生成绘图数据',
      code: `import numpy as np

# 生成 x 值
x = np.linspace(0, 2 * np.pi, 100)

# 生成 y 值
y_sin = np.sin(x)
y_cos = np.cos(x)

print("x 前5个值:", x[:5])
print("sin(x) 前5个值:", y_sin[:5])
print("cos(x) 前5个值:", y_cos[:5])

# 计算统计信息
print("\nsin(x) 的最大值:", np.max(y_sin))
print("sin(x) 的最小值:", np.min(y_sin))`,
      expectedOutput: `x 前5个值: [0.         0.06346652 0.12693304 0.19039955 0.25386607]
sin(x) 前5个值: [0.         0.06342392 0.12659245 0.18925124 0.25114799]
cos(x) 前5个值: [1.         0.99798668 0.99195481 0.98192792 0.9679487 ]

sin(x) 的最大值: 0.999999...
sin(x) 的最小值: -0.999999...`
    }
  ],
  exercises: [
    {
      id: 'plt-ex1',
      title: '生成数据点',
      instructions: '使用 linspace 生成 0 到 10 之间的 50 个点，并计算它们的平方。',
      starterCode: `import numpy as np

# 生成 0 到 10 的 50 个点
x = 
y = 

print("x 前5个:", x[:5])
print("y 前5个:", y[:5])`,
      solution: `import numpy as np

x = np.linspace(0, 10, 50)
y = x ** 2

print("x 前5个:", x[:5])
print("y 前5个:", y[:5])`,
      hints: ['使用 np.linspace(0, 10, 50) 生成数据点', '使用 ** 2 计算平方']
    }
  ]
};