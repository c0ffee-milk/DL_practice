import type { Topic } from '../../types';

export const topic20: Topic = {
  id: '20-byte-swap',
  title: '字节交换',
  order: 20,
  category: 'functions',
  description: '学习 NumPy 数组的字节顺序（大小端）操作。',
  content: {
    explanation: `<p>NumPy 提供了以下字节交换函数：</p>
<ul>
<li><strong>byteswap</strong> - 交换数组元素的字节顺序</li>
<li><strong>newbyteorder</strong> - 返回具有新字节顺序的数组</li>
</ul>
<p>大小端（Endian）是指多字节数据在内存中的存储顺序：</p>
<ul>
<li>大端（Big-endian）：高位字节存储在低地址</li>
<li>小端（Little-endian）：低位字节存储在低地址</li>
</ul>`,
    keyPoints: [
      '字节交换主要用于不同架构间的数据传输',
      '现代计算机大多使用小端模式',
      '网络传输通常使用大端模式',
      'byteswap() 默认进行原地修改'
    ]
  },
  examples: [
    {
      id: 'byteswap-1',
      title: '字节交换',
      description: '演示字节交换操作',
      code: `import numpy as np

arr = np.array([1, 256, 65536], dtype=np.int32)
print("原数组:", arr)
print("原数组的字节表示:", arr.tobytes())

swapped = arr.byteswap()
print("\n交换后:", swapped)
print("交换后的字节表示:", swapped.tobytes())`,
      expectedOutput: `原数组: [     1    256  65536]
原数组的字节表示: b'...'

交换后: [16777216    65536      256]
交换后的字节表示: b'...'`
    }
  ],
  exercises: [
    {
      id: 'byteswap-ex1',
      title: '查看字节顺序',
      instructions: '创建一个 int16 数组，查看其字节顺序并进行交换。',
      starterCode: `import numpy as np

arr = np.array([1, 256], dtype=np.int16)
print("原数组:", arr)

# 进行字节交换
swapped = 
print("交换后:", swapped)`,
      solution: `import numpy as np

arr = np.array([1, 256], dtype=np.int16)
print("原数组:", arr)

swapped = arr.byteswap()
print("交换后:", swapped)`,
      hints: ['使用 byteswap() 方法进行字节交换']
    }
  ]
};