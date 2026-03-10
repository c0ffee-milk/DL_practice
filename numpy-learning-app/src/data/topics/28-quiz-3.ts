import type { Topic } from '../../types';

export const topic28: Topic = {
  id: '28-quiz-3',
  title: '测验 3: 综合应用',
  order: 28,
  category: 'quiz',
  description: '测试 NumPy 综合应用能力。',
  content: {
    explanation: `<p>本测验涵盖 NumPy 综合应用：</p>
<ul>
<li>数学和统计函数</li>
<li>线性代数</li>
<li>综合练习</li>
</ul>`,
    keyPoints: [
      '综合运用所学知识',
      '解决实际问题',
      '熟练运用 NumPy 各种功能'
    ]
  },
  examples: [],
  exercises: [
    {
      id: 'quiz3-1',
      title: '测验题 1',
      instructions: '计算数组 [1,2,3,4,5] 的平均值和标准差。',
      starterCode: `import numpy as np

arr = np.array([1, 2, 3, 4, 5])
mean = 
std = 
print("平均值:", mean)
print("标准差:", std)`,
      solution: `import numpy as np

arr = np.array([1, 2, 3, 4, 5])
mean = np.mean(arr)
std = np.std(arr)
print("平均值:", mean)
print("标准差:", std)`,
      hints: ['使用 np.mean() 和 np.std()']
    },
    {
      id: 'quiz3-2',
      title: '测验题 2',
      instructions: '计算两个数组的点积：a = [1,2,3], b = [4,5,6]。',
      starterCode: `import numpy as np

a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
dot_product = 
print(dot_product)`,
      solution: `import numpy as np

a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
dot_product = np.dot(a, b)
print(dot_product)`,
      hints: ['使用 np.dot() 函数', '或者使用 a @ b']
    },
    {
      id: 'quiz3-3',
      title: '测验题 3',
      instructions: '创建一个 5x5 的随机整数数组（0-100），找出最大值及其位置。',
      starterCode: `import numpy as np

arr = 
max_val = 
max_pos = 
print("数组:\n", arr)
print("最大值:", max_val)
print("最大值位置:", max_pos)`,
      solution: `import numpy as np

arr = np.random.randint(0, 101, size=(5, 5))
max_val = np.max(arr)
max_pos = np.unravel_index(np.argmax(arr), arr.shape)
print("数组:\n", arr)
print("最大值:", max_val)
print("最大值位置:", max_pos)`,
      hints: ['使用 np.random.randint() 创建随机数组', '使用 argmax() 找索引', '使用 unravel_index 转二维坐标']
    }
  ]
};