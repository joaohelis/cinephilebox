package org.apache.jsp.WEB_002dINF.views;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class menu_jspx extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List<String> _jspx_dependants;

  static {
    _jspx_dependants = new java.util.ArrayList<String>(3);
    _jspx_dependants.add("/WEB-INF/tags/menu/menu.tagx");
    _jspx_dependants.add("/WEB-INF/tags/menu/category.tagx");
    _jspx_dependants.add("/WEB-INF/tags/menu/item.tagx");
  }

  private org.glassfish.jsp.api.ResourceInjector _jspx_resourceInjector;

  public java.util.List<String> getDependants() {
    return _jspx_dependants;
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;

    try {
      response.setContentType("text/html;charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;
      _jspx_resourceInjector = (org.glassfish.jsp.api.ResourceInjector) application.getAttribute("com.sun.appserv.jsp.resource.injector");

      out.write("<div version=\"2.0\" id=\"menu\">");
      if (_jspx_meth_menu_menu_0(_jspx_page_context))
        return;
      out.write("</div>");
    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          out.clearBuffer();
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }

  private boolean _jspx_meth_menu_menu_0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  menu:menu
    org.apache.jsp.tag.web.menu.menu_tagx _jspx_th_menu_menu_0 = (_jspx_resourceInjector != null) ? _jspx_resourceInjector.createTagHandlerInstance(org.apache.jsp.tag.web.menu.menu_tagx.class) : new org.apache.jsp.tag.web.menu.menu_tagx();
    _jspx_th_menu_menu_0.setJspContext(_jspx_page_context);
    _jspx_th_menu_menu_0.setZ("nZaf43BjUg1iM0v70HJVEsXDopc=");
    _jspx_th_menu_menu_0.setId("_menu");
    _jspx_th_menu_menu_0.setJspBody(new menu_jspxHelper( 0, _jspx_page_context, _jspx_th_menu_menu_0, null));
    _jspx_th_menu_menu_0.doTag();
    return false;
  }

  private boolean _jspx_meth_menu_category_0(javax.servlet.jsp.tagext.JspTag _jspx_parent, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  menu:category
    org.apache.jsp.tag.web.menu.category_tagx _jspx_th_menu_category_0 = (_jspx_resourceInjector != null) ? _jspx_resourceInjector.createTagHandlerInstance(org.apache.jsp.tag.web.menu.category_tagx.class) : new org.apache.jsp.tag.web.menu.category_tagx();
    _jspx_th_menu_category_0.setJspContext(_jspx_page_context);
    _jspx_th_menu_category_0.setParent(_jspx_parent);
    _jspx_th_menu_category_0.setZ("nj8Dm3hojIyIEyPkwE1UMDIs+K8=");
    _jspx_th_menu_category_0.setId("c_controller");
    _jspx_th_menu_category_0.setJspBody(new menu_jspxHelper( 1, _jspx_page_context, _jspx_th_menu_category_0, null));
    _jspx_th_menu_category_0.doTag();
    return false;
  }

  private boolean _jspx_meth_menu_item_0(javax.servlet.jsp.tagext.JspTag _jspx_parent, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  menu:item
    org.apache.jsp.tag.web.menu.item_tagx _jspx_th_menu_item_0 = (_jspx_resourceInjector != null) ? _jspx_resourceInjector.createTagHandlerInstance(org.apache.jsp.tag.web.menu.item_tagx.class) : new org.apache.jsp.tag.web.menu.item_tagx();
    _jspx_th_menu_item_0.setJspContext(_jspx_page_context);
    _jspx_th_menu_item_0.setParent(_jspx_parent);
    _jspx_th_menu_item_0.setZ("aFvpqHl/PUUBWdOkH6ebhcUw4Qg=");
    _jspx_th_menu_item_0.setUrl("/user/index");
    _jspx_th_menu_item_0.setMessageCode("global_generic");
    _jspx_th_menu_item_0.setId("i_controller__userindex_id");
    _jspx_th_menu_item_0.doTag();
    return false;
  }

  private class menu_jspxHelper
      extends org.apache.jasper.runtime.JspFragmentHelper
  {
    private javax.servlet.jsp.tagext.JspTag _jspx_parent;
    private int[] _jspx_push_body_count;

    public menu_jspxHelper( int discriminator, JspContext jspContext, javax.servlet.jsp.tagext.JspTag _jspx_parent, int[] _jspx_push_body_count ) {
      super( discriminator, jspContext, _jspx_parent );
      this._jspx_parent = _jspx_parent;
      this._jspx_push_body_count = _jspx_push_body_count;
    }
    public boolean invoke0( JspWriter out ) 
      throws Throwable
    {
      if (_jspx_meth_menu_category_0((javax.servlet.jsp.tagext.JspTag) _jspx_parent, _jspx_page_context))
        return true;
      return false;
    }
    public boolean invoke1( JspWriter out ) 
      throws Throwable
    {
      if (_jspx_meth_menu_item_0((javax.servlet.jsp.tagext.JspTag) _jspx_parent, _jspx_page_context))
        return true;
      return false;
    }
    public void invoke( java.io.Writer writer )
      throws JspException
    {
      JspWriter out = null;
      if( writer != null ) {
        out = this.jspContext.pushBody(writer);
      } else {
        out = this.jspContext.getOut();
      }
      try {
        switch( this.discriminator ) {
          case 0:
            invoke0( out );
            break;
          case 1:
            invoke1( out );
            break;
        }
      }
      catch( Throwable e ) {
        if (e instanceof SkipPageException)
            throw (SkipPageException) e;
        throw new JspException( e );
      }
      finally {
        if( writer != null ) {
          this.jspContext.popBody();
        }
      }
    }
  }
}
