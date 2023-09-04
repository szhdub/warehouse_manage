package com.pn.controller;

import com.google.code.kaptcha.Producer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.imageio.ImageIO;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

@RestController
public class LoginController {

    // 注入
    @Autowired
    public Producer producer;

    // 注入redis模板
    @Autowired
    private StringRedisTemplate redisTemplate;

    @RequestMapping("/captcha/captchaImage")
    public void captchaImage(HttpServletResponse response) {

        ServletOutputStream out = null;
        try {
            // 生成验证码图片文本
            String text = producer.createText();
            // 使用文本 ---- BufferedImage对象存在内存中
            BufferedImage image = producer.createImage(text);
            // 将验证码文本保存到redis
            redisTemplate.opsForValue().set(text, "", 60 * 30, TimeUnit.SECONDS);

            response.setContentType("image/jpeg");
            out = response.getOutputStream();
            ImageIO.write(image, "jpg", out);

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
