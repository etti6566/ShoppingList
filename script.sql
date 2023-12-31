USE [ShoppingListDB]
GO
/****** Object:  Table [dbo].[Categories]    Script Date: 14/11/2023 04:25:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Categories](
	[CategoryId] [int] NOT NULL,
	[CategoryName] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Categories] PRIMARY KEY CLUSTERED 
(
	[CategoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Products]    Script Date: 14/11/2023 04:25:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Products](
	[ProductID] [int] IDENTITY(1,1) NOT NULL,
	[ProductName] [nvarchar](100) NOT NULL,
	[Price] [float] NOT NULL,
	[CategoryID] [int] NULL,
 CONSTRAINT [PK__Products__B40CC6EDB9D9301B] PRIMARY KEY CLUSTERED 
(
	[ProductID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[Categories] ([CategoryId], [CategoryName]) VALUES (1, N'מוצרי ניקיון')
INSERT [dbo].[Categories] ([CategoryId], [CategoryName]) VALUES (2, N'גבינות')
INSERT [dbo].[Categories] ([CategoryId], [CategoryName]) VALUES (3, N'פירות וירקות')
INSERT [dbo].[Categories] ([CategoryId], [CategoryName]) VALUES (4, N'בשר ודגים')
INSERT [dbo].[Categories] ([CategoryId], [CategoryName]) VALUES (5, N'מאפים')
GO
SET IDENTITY_INSERT [dbo].[Products] ON 

INSERT [dbo].[Products] ([ProductID], [ProductName], [Price], [CategoryID]) VALUES (101, N'סבון', 12, 1)
INSERT [dbo].[Products] ([ProductID], [ProductName], [Price], [CategoryID]) VALUES (102, N'שמפו', 9.8, 1)
INSERT [dbo].[Products] ([ProductID], [ProductName], [Price], [CategoryID]) VALUES (103, N'קוטג', 6.7, 2)
INSERT [dbo].[Products] ([ProductID], [ProductName], [Price], [CategoryID]) VALUES (104, N'גבינה צהובה', 29.9, 2)
INSERT [dbo].[Products] ([ProductID], [ProductName], [Price], [CategoryID]) VALUES (105, N'ענבים', 24.9, 3)
INSERT [dbo].[Products] ([ProductID], [ProductName], [Price], [CategoryID]) VALUES (106, N'עגבניות', 5.5, 3)
INSERT [dbo].[Products] ([ProductID], [ProductName], [Price], [CategoryID]) VALUES (107, N'דג סלמון', 89, 4)
INSERT [dbo].[Products] ([ProductID], [ProductName], [Price], [CategoryID]) VALUES (108, N'דג טונה', 34.7, 4)
INSERT [dbo].[Products] ([ProductID], [ProductName], [Price], [CategoryID]) VALUES (109, N'פיצה', 5, 5)
INSERT [dbo].[Products] ([ProductID], [ProductName], [Price], [CategoryID]) VALUES (110, N'לחמניה', 2, 5)
INSERT [dbo].[Products] ([ProductID], [ProductName], [Price], [CategoryID]) VALUES (111, N'cake', 33, NULL)
INSERT [dbo].[Products] ([ProductID], [ProductName], [Price], [CategoryID]) VALUES (114, N'חלה', 10, 5)
INSERT [dbo].[Products] ([ProductID], [ProductName], [Price], [CategoryID]) VALUES (115, N'בורקס', 5, 5)
INSERT [dbo].[Products] ([ProductID], [ProductName], [Price], [CategoryID]) VALUES (118, N'תפוח אדמה', 3.9, 3)
INSERT [dbo].[Products] ([ProductID], [ProductName], [Price], [CategoryID]) VALUES (120, N'בורי', 0, 4)
INSERT [dbo].[Products] ([ProductID], [ProductName], [Price], [CategoryID]) VALUES (121, N'סבון כלים', 0, 1)
INSERT [dbo].[Products] ([ProductID], [ProductName], [Price], [CategoryID]) VALUES (122, N'מעדן שוקולד', 0, 2)
SET IDENTITY_INSERT [dbo].[Products] OFF
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK__Products__Catego__2E1BDC42] FOREIGN KEY([CategoryID])
REFERENCES [dbo].[Categories] ([CategoryId])
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK__Products__Catego__2E1BDC42]
GO
