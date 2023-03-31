# Famme Dawn

Customization of Shopify Dawn.

## Customization

* Image banner with support for mobile and desktop
* A USP section on the product page
* custom.css.liquid: All custom CSS should be here, to avoid clash with the theme's CSS
* theme.liquid: Google Tag Manager, a bit rewrite of SEO title, custom.css import 
* main-cart-footer.liquid: b2b price based on metafields 
* main-cart-items.liquid: b2b price based on metafields
* main-order.liquid: Some links to complaint and return form 
* 




## Legacy customization 

* Adding a color label dynamically when hovering over the swatches:
```javascript
// Custom: For showing color names dynamically on product page
// above the images on the PDP for selecti
if (document.querySelector('variant-radios')){
  document.querySelector('variant-radios').onmouseover=e=>{
    if (e.target.tagName == 'LABEL'){
      e.target.parentElement.firstElementChild.firstElementChild.innerHTML = e.target.previousElementSibling.value;
    }
  }
  document.querySelector('variant-radios').onmouseout=e=>{
    if (e.target.tagName == 'LABEL'){
      e.target.parentElement.firstElementChild.firstElementChild.innerHTML = e.target.parentElement.querySelector('input:checked').value;
    }
  }
}
```

## Endless scroll / infinite scroll, main-collection-product-grid.liquid:


```liquid
{%- if paginate.pages > 1 -%}
            <div class="pagination-wrapper more">
              <a href="{{ collection.url }}?page={{ paginate.current_page | plus: 1 }}" id="{{ paginate.pages }}" Class="button button--primary">{{ 'shopify.checkout.general.expand_notice_label' | t }}</a>
            </div>
            <script>
              if (window.location.href.includes('?')){document.querySelector('div.more>a').href = window.location.href + '&page={{ paginate.current_page | plus: 1 }}';}
              window.onscroll = function(){
                if (document.querySelector('div.pagination-wrapper.more') && document.querySelector('div.more>a').getBoundingClientRect().bottom < 3000 && document.querySelector('div.more>a').innerHTML != '{{ 'accessibility.loading' | t }}'){
                  document.querySelector('div.more>a').innerHTML = '{{ 'accessibility.loading' | t }}';
                  fetch(document.querySelector('div.more>a').href, {method: 'get', credentials: 'include'}).then(response=>response.text()).then(res=>{
                    var prods = new DOMParser().parseFromString(res, "text/html").body.querySelector('ul#product-grid');
                    if (prods){
                      document.querySelector('ul#product-grid').innerHTML += prods.innerHTML;
                      //window.history.replaceState('', '', document.querySelector('div.more>a').href);
                      if (document.querySelector('div.more>a').href.slice(-1) < parseInt(document.querySelector('div.more>a').id)){
                        document.querySelector('div.more>a').href = document.querySelector('div.more>a').href.slice(0, -1) + (parseInt(document.querySelector('div.more>a').href.slice(-1)) + 1);
                        document.querySelector('div.more>a').innerHTML = '{{ 'shopify.checkout.general.expand_notice_label' | t }}';
                      } else {
                        document.querySelector('div.pagination-wrapper.more').remove();
                      }
                    } else {
                      document.querySelector('div.pagination-wrapper.more').remove();
                    }
                  });
                }
              }
            </script>
            {% comment %}{% render 'pagination', paginate: paginate, anchor: '' %}{% endcomment %}
            {%- endif -%}
          </div>
{%- endif -%}
```
and facet.js:

```javascript
static renderSectionFromFetch(url, event, section) {
    fetch(url)
      .then(response => response.text())
      .then((responseText) => {
        const html = responseText;
        FacetFiltersForm.filterData = [...FacetFiltersForm.filterData, { html, url }];
        FacetFiltersForm.renderFilters(html, event);
        FacetFiltersForm.renderProductGridContainer(html);
        FacetFiltersForm.renderProductCount(html);
        // customization for endless scrolling
        if (section.includes('__product-grid') && document.querySelector('div.pagination-wrapper.more>a.button')){
          document.querySelector('div.pagination-wrapper.more>a.button').href = url + '&page=2';
        }
      });
  }
```



* Hide products from collection with tag, used in main-collection.product.grid.liquid:
```liquid
{%- for product in collection.products -%}
{%- if product.tags contains 'hide-product'-%}{%- continue -%}{%- endif -%}
```

* Search, hide with tag 
```liquid
{%- when 'product' -%}
{%- if item.tags contains 'hide-product' -%}{%- continue -%}{%- endif -%}
```

* Collection swatch - When color and size is an option on the product 
```liquid

{%- assign colors = settings.colors | newline_to_br | split: '<br />' -%}
{% for option in product.options %}
  {%- assign downcased_option = option | downcase -%}
  {% if downcased_option contains 'color' or downcased_option contains 'colour' or downcased_option contains 'far' or downcased_option contains 'fär' %}
    {%- assign option_index = forloop.index0 -%}
    {%- assign values = '' -%}
    {% assign counter = 0 %}{% assign imgs = 0 %}
    <div class="product-groups__images">
      {% for variant in product.variants %}
        {% if variant.available %}
      	  {%- assign value = variant.options[option_index] -%}
      	  {% comment %} The first variant is in feature image, no need to display thumbnail {% endcomment %}
      	  {% if counter < 0  %}
      		{% assign values = values | join: ',' %}
      		{% assign values = values | append: ',' | append: value %}
      		{% assign values = values | split: ',' %}
      		{% assign counter = counter | plus:1 %}
      		{% continue %}
      	  {% endif %}
      	  {% assign counter = counter | plus:1 %}
          {% unless values contains value %}
      		{% assign values = values | join: ',' %}
      		{% assign values = values | append: ',' | append: value %}
      		{% assign values = values | split: ',' %}
      		{% if variant.image %}
              {% assign clrs = clrs | plus: 1 %}
      		  <a src="{{ variant.image | img_url: '350x' }}" href="{{ variant.url }}" title="{{ value }}" data-toggle="toggle{{ itemID }}" class="other-product-image img{% if clrs > 3 %} hidden{% endif %}" style="background:{% for color in colors %}{%- assign cp = color | strip | split: '-' -%}{% if cp.first == value %}{{ cp.last }}{% break %}{% endif %}{% endfor %};"> </a>
      	    {% endif %}
      	  {% endunless %}
      	{% endif %}
      {% endfor %}
      {% if clrs > 3 %}<span class="other-product-image more">+{{ clrs | minus: 3 }}</span>{% endif %}
	</div>
      {%- style -%}
          {% comment %}This is some styling for the variant images under each product used on collection pages and search{% endcomment %}
          .product-groups__images img {width: 60px;}
          .product-groups__images a:hover img {border:  solid 1px black;}
          @media screen and (max-width: 798px){
          .spaced-section {margin: 3rem auto 0;}
          .product-groups__images img {width: 40px;}
          }
          div.product-groups__images {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-wrap: wrap;
          }
          div.product-groups__images>a.other-product-image {
          margin: 0 .7rem .7rem 0;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          }
          div.product-groups__images>span.other-product-image {
          cursor: pointer;
          border: 1px solid;
          border-radius: 50%;
          min-width: 20px;
          height: 20px;
          line-height: 18px;
          font-size: 9px;
          text-align: center;
          margin-bottom: .7em;
          }
      {%- endstyle -%}


  {% endif %}
{% endfor %}

```