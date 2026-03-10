import type { Topic } from '../../types';

export const topic26: Topic = {
  id: '26-quiz-1',
  title: '测验 1: 基础知识',
  order: 26,
  category: 'quiz',
  description: '测试 NumPy 基础知识掌握情况。',
  content: {
    explanation: `<p>本测验涵盖 NumPy 基础知识：</p>
<ul>
<li>NumPy 简介和安装</li>
<li>ndarray 对象</li>
<li>数据类型</li>
<li>数组属性</li>
<li>创建数组</li>
</ul>`,
    keyPoints: [
      '检查是否理解 ndarray 的基本概念',
      '验证数组创建方法的掌握',
      '测试对数组属性的理解'
    ]
  },
  examples: [],
  exercises: [
    {
      id: 'quiz1-1',
      title: '测验题 1',
      instructions: '创建一个 3x3 的单位矩阵。',
      starterCode: `import numpy as np

# 创建 3x3 单位矩阵
result = 
print(result)`,
      solution: `import numpy as np

result = np.eye(3)
print(result)`,
      hints: ['使用 np.eye() 函数']
    },
    {
      id: 'quiz1-2',
      title: '测验题 2',
      instructions: '创建一个包含 0 到 20（包含）所有偶数的数组。',
      starterCode: `import numpy as np

# 创建偶数数组
evens = 
print(evens)`,
      solution: `import numpy as np

evens = np.arange(0, 21, 2)
print(evens)`,
      hints: ['使用 arange 函数', '步长为 2']
    },
    {
      id: 'quiz1-3',
      title: '测验题 3',
      instructions: '创建一个 float32 类型的数组 [1.0, 2.0, 3.0]，并验证其 dtype。',
      starterCode: `import numpy as np

arr = 
print(arr)
print(arr.dtype)`,
      solution: `import numpy as np

arr = np.array([1.0, 2.0, 3.0], dtype=np.float32)
print(arr)
print(arr.dtype)`,
      hints: ['使用 dtype 参数指定类型']
    }
  ]
};