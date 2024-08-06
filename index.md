---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---
<div class="col-10 col-lg-6">
    <div class="row justify-content-center my-2">
        <div class="col-12 bio">
            {% for page in site.pages %}
                {% if page.name == "bio.md" %}
                    {{ page.content }}
                {% endif %}
            {% endfor %}
        </div>
    </div>
    <hr />
    <div class="row justify-content-center links text-center my-2">
        <div class="col-auto">
            <a data-target="highlights" class="content-button">Highlights</a>
        </div>
        <div class="col-auto">
            <a data-target="publications" class="content-button">Publications</a>
        </div>
        <div class="col-auto">
            <a data-target="teaching" class="content-button">Teaching</a>
        </div>
        <div class="col-auto">
            <a data-target="social" class="content-button">Other</a>
        </div>
    </div>
    <hr />
    <div class="row justify-content-center">
        <div class="col-12">
            <div id="highlights-container" class="content-section d-none"> {% include highlights.html %} </div>
            <div id="publications-container" class="content-section d-none"> {% include publications.html %} </div>
            <div id="teaching-container" class="content-section d-none"> {% include teaching.html %} </div>
            <div id="social-container" class="content-section d-none"> {% include social_impacts.html %} </div>
        </div>
    </div>
</div>
