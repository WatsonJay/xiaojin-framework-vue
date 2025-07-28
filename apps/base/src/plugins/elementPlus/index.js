/*
 * @Description: 
 * @Author:  Jaywatson
 * @Date: 2025/7/28 9:44
 */

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "@/router/index.js";

export const setupElementPlus = (app) => {
  app.use(ElementPlus)
}