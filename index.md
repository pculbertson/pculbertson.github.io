---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---
<div class="col-6">
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
    <div class="row justify-content-center my-2">
        <div class="col-12">
            <a id="highlights">Highlights</a>
            <a id="publications">Publications</a>
            <div id="content"> <p> Initial content. </p> </div>
        </div>
    </div>
</div>

<script>
    document.getElementById('highlights').addEventListener('click', function() {
        document.getElementById('content').innerHTML = "Highlights."
    });
    document.getElementById('publications').addEventListener('click', function() {
        document.getElementById('content').innerHTML = `{% include publications.html %}`
    });
