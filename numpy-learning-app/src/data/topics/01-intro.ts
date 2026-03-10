import type { Topic } from '../../types';

export const topic01: Topic = {
  id: '01-intro',
  title: 'NumPy 简介',
  order: 1,
  category: 'basics',
  description: '了解 NumPy 是什么，以及为什么它是 Python 科学计算的核心库。',
  content: {
    explanation: `<p>NumPy（Numerical Python）是 Python 语言的一个扩展程序库，支持大量的维度数组与矩阵运算，此外也针对数组运算提供大量的数学函数库。</p>
<p>NumPy 的前身 Numeric 最早是由 Jim Hugunin 与其它协作者共同开发，2005 年，Travis Oliphant 在 Numeric 中结合了另一个同性质的程序库 Numarray 的特色，并加入了其它扩展而开发了 NumPy。NumPy 为开放源代码并且由许多协作者共同维护开发。</p>
<p>NumPy 是一个运行速度非常快的数学库，主要用于数组计算，包含：</p>
<ul>
<li>一个强大的N维数组对象 ndarray</li>
<li>广播功能函数</li>
<li>整合 C/C++/Fortran 代码的工具</li>
<li>线性代数、傅里叶变换、随机数生成等功能</li>
</ul>`,
    keyPoints: [
      'NumPy 是 Python 科学计算的基础库',
      '核心是多维数组对象 ndarray',
      '提供了大量的数学运算函数',
      '通常与 SciPy 和 Matplotlib 一起使用'
    ]
  },
  examples: [
    {
      id: 'intro-1',
      title: '验证 NumPy 安装',
      description: '导入 NumPy 并查看版本信息',
      code: `import numpy as np

print("NumPy 版本:", np.__version__)
print("NumPy 已正确安装!")`,
      expectedOutput: `NumPy 版本: 1.26.0
NumPy 已正确安装!`
    }
  ],
  exercises: [
    {
      id: 'intro-ex1',
      title: '导入 NumPy',
      instructions: '导入 NumPy 库，并使用别名 np，然后打印一条欢迎消息。',
      starterCode: `# 请在这里编写代码

`,
      solution: `import numpy as np

print("欢迎使用 NumPy!")`,
      hints: ['使用 import numpy as np 导入', '使用 print() 函数输出消息']
    }
  ]
};