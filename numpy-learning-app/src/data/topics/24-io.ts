import type { Topic } from '../../types';

export const topic24: Topic = {
  id: '24-io',
  title: 'NumPy IO',
  order: 24,
  category: 'advanced',
  description: '学习 NumPy 的数据输入输出操作。',
  content: {
    explanation: `<p>NumPy 提供了多种数据读写方式：</p>
<ul>
<li><strong>save/load</strong> - 保存/读取 .npy 二进制文件</li>
<li><strong>savez/loadz</strong> - 保存/读取多个数组到 .npz 文件</li>
<li><strong>savetxt/loadtxt</strong> - 保存/读取文本文件</li>
<li><strong>genfromtxt</strong> - 从文本文件读取，处理缺失值</li>
</ul>`,
    keyPoints: [
      '.npy 格式是 NumPy 专用的二进制格式',
      '.npz 是压缩的多个数组格式',
      '文本格式适合与其他程序交换数据',
      'savetxt 支持自定义分隔符和格式'
    ]
  },
  examples: [
    {
      id: 'io-1',
      title: '保存和加载',
      description: '数组的保存和读取',
      code: `import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])

# 保存为文本格式
np.savetxt('data.txt', arr, fmt='%d', delimiter=',')

# 从文本文件读取
loaded = np.loadtxt('data.txt', delimiter=',')
print("从文件读取:")
print(loaded)

# 显示文件内容
with open('data.txt', 'r') as f:
    print("\n文件内容:")
    print(f.read())`,
      expectedOutput: `从文件读取:
[[1. 2. 3.]
 [4. 5. 6.]]

文件内容:
1,2,3
4,5,6`
    }
  ],
  exercises: [
    {
      id: 'io-ex1',
      title: '格式化输出',
      instructions: '创建一个数组，使用 savetxt 保存为 CSV 格式（逗号分隔）。',
      starterCode: `import numpy as np

arr = np.array([[1.5, 2.3, 3.7], [4.1, 5.6, 6.2]])
# 保存为 CSV 格式


# 读取显示
with open('output.csv', 'r') as f:
    print(f.read())`,
      solution: `import numpy as np

arr = np.array([[1.5, 2.3, 3.7], [4.1, 5.6, 6.2]])
np.savetxt('output.csv', arr, delimiter=',', fmt='%.2f')

with open('output.csv', 'r') as f:
    print(f.read())`,
      hints: ['使用 delimiter="," 指定逗号分隔', '使用 fmt 指定格式']
    }
  ]
};