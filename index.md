---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---
<div class="col-6">
    <div class="row justify-content-center my-4">
        <div class="col-12 bio">
            {% for page in site.pages %}
                {% if page.name == "bio.md" %}
                    {{ page.content }}
                {% endif %}
            {% endfor %}
        </div>
    </div>
   
</div>
