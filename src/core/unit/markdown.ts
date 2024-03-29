/**
 * Markdown unit
 */
export default class Markdown {
  /**
   * intercept
   * @description Intercept markdown text content
   * @param {string} source
   * @param {number} length
   * @return {string}
   */
  static intercept(source: string, length: number): string {
    const str = source.replace(/(\*\*|__)(.*?)(\*\*|__)/g, '') // 全局匹配内粗体
        .replace(/!\[[\s\S]*?]\([\s\S]*?\)/g, '') // 全局匹配图片
        .replace(/\[[\s\S]*?]\([\s\S]*?\)/g, '') // 全局匹配连接
        .replace(/<\/?.+?\/?>/g, '') // 全局匹配内html标签
        .replace(/(\*)(.*?)(\*)/g, '') // 全局匹配内联代码块
        .replace(/`{1,2}[^`](.*?)`{1,2}/g, '') // 全局匹配内联代码块
        .replace(/```([\s\S]*?)```[\s]*/g, '') // 全局匹配代码块
        .replace(/~~(.*?)~~/g, '') // 全局匹配删除线
        .replace(/[\s]*[-*+]+(.*)/g, '') // 全局匹配无序列表
        .replace(/[\s]*[0-9]+\.(.*)/g, '') // 全局匹配有序列表
        .replace(/(#+)(.*)/g, '') // 全局匹配标题
        .replace(/(>+)(.*)/g, '') // 全局匹配摘要
        .replace(/\r\n/g, '') // 全局匹配换行
        .replace(/\n/g, '') // 全局匹配换行
        .replace(/\s/g, ''); // 全局匹配空字符;
    return str.slice(0, length);
  }

  /**
   * 关键字转markdown链接
   * @param {string} source
   * @param {string} host
   * @return {string}
   */
  static keywordToLink(source: string, host: string) {
    const keywords = ['git', 'vue', 'Hook', '`Hook`', 'swiper'];
    let target = source;
    keywords.forEach((keyword) => {
      target = target.replace(
          eval(`/ ${keyword} /g`),
          ` [${keyword}](${host}/search?query=${keyword}) `,
      );
    });
    return target;
  }
  /**
   * 获取markdown文档的图片链接
   * @param {string} source
   * @return {RegExpMatchArray | null}
   */
  static getImgUrl(source: string): string[] {
    const reg = /!\[(.*?)]\((.*?)\)/g;
    const result: RegExpMatchArray | null = source.match(reg);
    const urls: string[] = [];
    if (result?.length) {
      urls.push(...result.map((item) => item.replace(/!\[(.*?)]\((.*?)\)/g, '$2')));
    }
    return urls;
  }

  /**
   * 获取markdown文档的目录
   * @param {string} source
   * @return {string[]}
   */
  static getCatalog(source: string): string[] {
    const reg = /##+(.*?)\n/g;
    const result: RegExpMatchArray | null = source.match(reg);
    const catalogs: string[] = [];
    if (result?.length) {
      catalogs.push(...result.map((item) => item.replace(/#+(.*?)\n/g, '$1')));
    }
    return catalogs;
  }

  /**
   * 获取markdown文档的二级标题 不包含三级标题
   * @param {string} source
   * @return {string[]}
   */
  static getSecondTitle(source: string): string[] {
    const reg = /##+(.*?)\n/g;
    const result: RegExpMatchArray | null = source.match(reg);
    const catalogs: string[] = [];
    if (result?.length) {
      catalogs.push(...result.map((item) => item.replace(/#+(.*?)\n/g, '$1')));
    }
    return catalogs;
  }
}
